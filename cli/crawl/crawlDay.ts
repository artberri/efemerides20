import { right, TaskEither } from "fp-ts/TaskEither";
import { Month } from "../../utils/date";

export type CrawlDay = (m: Month, d: number) => TaskEither<Error, void>;
export const crawlDay: CrawlDay = (month, day) => {
  // eslint-disable-next-line no-console
  console.log(`Start crawling month:${month.name} day:${day}`);

  return right(undefined);
};
