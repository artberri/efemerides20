import { chain, map as mapF, resolve } from "fluture";
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
import { CrawlTask, Efemerides } from "./todo";

const merge =
  (previous: Efemerides) =>
  (task: CrawlTask): CrawlTask =>
    mapF<Efemerides, Efemerides>((efes) => [...previous, ...efes])(task);

const sequencify = (tasks: CrawlTask[]): CrawlTask => {
  return tasks.reduce((acc, current) => {
    return chain<Error, Efemerides, Efemerides>((efes) => {
      const prev = merge(efes);

      return prev(current);
    })(acc);
  }, resolve<Efemerides>([]));
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
