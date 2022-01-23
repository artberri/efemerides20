import { chain, FutureInstance, map as mapF, resolve } from "fluture";
import { cond, map, pipe, T } from "ramda";
import {
  Day,
  getMonth,
  getMonthDays,
  getMonths,
  Month,
  MonthNumber,
} from "../../utils/date";
import { getValidMonthDay } from "./commandValidation";
import { getDayHtmlFromWikipedia } from "./getDayHtmlFromWikipedia";
import { getRawEfemeridesFromHtml } from "./getRawEfemeridesFromHtml";
import { mapEfemeridesFromRawContent } from "./mapEfemeridesFromRawContent";

export type CrawlTask = FutureInstance<Error, Ephemerides>;

const merge =
  (previous: Ephemerides) =>
  (task: CrawlTask): CrawlTask =>
    mapF<Ephemerides, Ephemerides>((efes) => [...previous, ...efes])(task);

const sequencify = (tasks: CrawlTask[]): CrawlTask => {
  return tasks.reduce((acc, current) => {
    return chain<Error, Ephemerides, Ephemerides>((efes) => {
      const prev = merge(efes);

      return prev(current);
    })(acc);
  }, resolve<Ephemerides>([]));
};

const crawlDay = (day: Day): CrawlTask =>
  pipe(
    getDayHtmlFromWikipedia,
    mapF(getRawEfemeridesFromHtml),
    mapF(mapEfemeridesFromRawContent(day)),
  )(day);

const crawlMonth: (month: Month) => CrawlTask = pipe(
  getMonthDays,
  map(crawlDay),
  sequencify,
);

const crawlYear: () => CrawlTask = pipe(getMonths, map(crawlMonth), sequencify);

export const crawler = cond<
  [MonthNumber | undefined, number | undefined],
  CrawlTask
>([
  [
    (month, day) => !!month && !!day,
    (month, day) =>
      crawlDay(getValidMonthDay(month as MonthNumber, day as number)),
  ],
  [(month) => !!month, (month) => crawlMonth(getMonth(month as MonthNumber))],
  [T, crawlYear],
]);
