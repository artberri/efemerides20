import { right, TaskEither } from "fp-ts/TaskEither";
import { Day } from "../../utils/date";
import { Efemeride, EfemerideType, getWikipediaUrl } from "./todo";

export interface CrawlDayDependencies {
  debug: (message: string) => void;
}

export type CrawlTask = TaskEither<Error, readonly Efemeride[]>;

export type CrawlDay = (d: Day) => CrawlTask;
export const crawlDay: CrawlDay = (day) => {
  return right([
    {
      month: day.month.number,
      day: day.number,
      rawContent: getWikipediaUrl(day),
      content: getWikipediaUrl(day),
      type: EfemerideType.Efemeride,
    },
  ]);
};
