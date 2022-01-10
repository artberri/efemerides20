import { pipe } from "fp-ts/function";
import { map as mapA } from "fp-ts/ReadonlyArray";
import { map as mapTE, TaskEither } from "fp-ts/TaskEither";
import { Day } from "../../utils/date";
import { getUrlContent } from "../../utils/getUrlContent";
import { parseDayHtml } from "./parseDayHtml";
import { Efemeride, EfemerideType, getWikipediaUrl } from "./todo";

const mapRawEfemerideContent = (day: Day) => (rawContent: string) => ({
  month: day.month.number,
  day: day.number,
  rawContent,
  content: "ok",
  type: EfemerideType.Efemeride,
});

export type CrawlTask = TaskEither<Error, readonly Efemeride[]>;
export type CrawlDay = (d: Day) => CrawlTask;
export const crawlDay: CrawlDay = (day) =>
  pipe(
    getWikipediaUrl(day),
    getUrlContent,
    mapTE(parseDayHtml),
    mapTE(mapA(mapRawEfemerideContent(day))),
  );
