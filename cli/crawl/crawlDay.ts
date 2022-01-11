import { flow, Lazy } from "fp-ts/function";
import { map as mapA } from "fp-ts/ReadonlyArray";
import { map as mapTE, TaskEither } from "fp-ts/TaskEither";
import { Day } from "../../utils/date";
import { getUrlContent } from "../../utils/getUrlContent";
import { parseDayHtml } from "./parseDayHtml";
import { Efemeride, EfemerideType, getWikipediaUrl } from "./todo";

const mapRawEfemerideContent =
  (day: Day) =>
  (rawContent: string): Efemeride => ({
    month: day.month.number,
    day: day.number,
    year: 2022,
    rawContent,
    content: "ok",
    type: EfemerideType.Efemeride,
  });

export type CrawlTask = TaskEither<Error, readonly Efemeride[]>;
export const crawlDay = (day: Day): Lazy<CrawlTask> =>
  flow(
    () => getWikipediaUrl(day),
    getUrlContent,
    mapTE(parseDayHtml),
    mapTE(mapA(mapRawEfemerideContent(day))),
  );
