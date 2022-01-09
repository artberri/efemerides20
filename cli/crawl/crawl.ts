import { pipe } from "fp-ts/function";
import { chain as chainO, fold, isSome, Option } from "fp-ts/Option";
import { flatten, map as mapA } from "fp-ts/ReadonlyArray";
import {
  chain as chainTE,
  left,
  map as mapTE,
  right,
  sequenceSeqArray,
} from "fp-ts/TaskEither";
import {
  getMonth,
  getMonthDay,
  getMonthDays,
  getMonths,
  Month,
} from "../../utils/date";
import { crawlDay, CrawlTask } from "./crawlDay";

const execSequentally = (tasks: readonly CrawlTask[]): CrawlTask => {
  return pipe(
    tasks,
    sequenceSeqArray,
    mapTE((a) => flatten(a)),
  );
};

const toTaskEither =
  (msg: string) =>
  <T>(option: Option<T>) => {
    return pipe(
      option,
      fold(
        () => left(new Error(msg)),
        (value) => right(value),
      ),
    );
  };

const crawlMonth = (month: Month) =>
  pipe(getMonthDays(month), mapA(crawlDay), execSequentally);

const crawlYear = () => pipe(getMonths(), mapA(crawlMonth), execSequentally);

const getValidMonth = (month: number) =>
  pipe(
    month,
    getMonth,
    toTaskEither(
      `command-argument value '${month}' is invalid for argument 'month'. Valid values from 1 to 12.`,
    ),
  );

const getValidMonthDay = (month: number) => (day: number) =>
  pipe(
    month,
    getMonth,
    chainO((m) => getMonthDay(m, day)),
    toTaskEither(
      `command-argument values '${month}/${day}' are invalid for argument pair 'month/day'.`,
    ),
  );

const crawlMonthOrDay = (month: number) =>
  fold(
    () => pipe(month, getValidMonth, chainTE(crawlMonth)),
    (day: number) => pipe(day, getValidMonthDay(month), chainTE(crawlDay)),
  );

export type Crawl = (m: Option<number>, d: Option<number>) => CrawlTask;
export const crawl: Crawl = (month, day) =>
  isSome(month) ? pipe(day, crawlMonthOrDay(month.value)) : crawlYear();
