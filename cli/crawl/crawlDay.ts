import { right, TaskEither } from "fp-ts/TaskEither";
import { Day } from "../../utils/date";

export type CrawlDay = (d: Day) => TaskEither<Error, void>;
export const crawlDay: CrawlDay = (day) => {
  // eslint-disable-next-line no-console
  console.log(`Start crawling month:${day.month.name} day:${day.number}`);

  return right(undefined);
};
