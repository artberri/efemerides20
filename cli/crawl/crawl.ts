import { flow, Lazy } from "fp-ts/function";
import { chain as chainO, fold, isSome, Option } from "fp-ts/Option";
import { flatten, map as mapA } from "fp-ts/ReadonlyArray";
import {
  chain as chainTE,
  left,
  map as mapTE,
  right,
  sequenceSeqArray,
  TaskEither,
} from "fp-ts/TaskEither";
import {
  Day,
  getMonth,
  getMonthDay,
  getMonthDays,
  getMonths,
  Month,
} from "../../utils/date";
import { crawlDay as lazyCawlDay, CrawlTask } from "./crawlDay";

const crawlDay = (day: Day): CrawlTask => lazyCawlDay(day)();

const execSequentally: (tasks: readonly CrawlTask[]) => CrawlTask = flow(
  sequenceSeqArray,
  mapTE((a) => flatten(a)),
);

type ToTaskEither = (m: string) => <T>(o: Option<T>) => TaskEither<Error, T>;
const toTaskEither: ToTaskEither = (message) =>
  fold(
    () => left(new Error(message)),
    (value) => right(value),
  );

const crawlMonth: (month: Month) => CrawlTask = flow(
  getMonthDays,
  mapA(crawlDay),
  execSequentally,
);

const crawlYear: Lazy<CrawlTask> = flow(
  getMonths,
  mapA(crawlMonth),
  execSequentally,
);

const getValidMonth = (month: number): Lazy<TaskEither<Error, Month>> =>
  flow(
    () => getMonth(month),
    toTaskEither(
      `command-argument value '${month}' is invalid for argument 'month'. Valid values from 1 to 12.`,
    ),
  );

const getValidMonthDay = (
  month: number,
  day: number,
): Lazy<TaskEither<Error, Day>> =>
  flow(
    () => getMonth(month),
    chainO((m) => getMonthDay(m, day)),
    toTaskEither(
      `command-argument values '${month}/${day}' are invalid for argument pair 'month/day'.`,
    ),
  );

const crawlMonthOrDay = (month: number, day: Option<number>): Lazy<CrawlTask> =>
  isSome(day)
    ? flow(getValidMonthDay(month, day.value), chainTE(crawlDay))
    : flow(getValidMonth(month), chainTE(crawlMonth));

export const crawl = (
  month: Option<number>,
  day: Option<number>,
): Lazy<CrawlTask> =>
  isSome(month) ? crawlMonthOrDay(month.value, day) : crawlYear;
