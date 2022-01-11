import { t } from "i18next";
import { Day } from "../../utils/date";
import { logger } from "../logger";

const baseUrl = "https://es.wikipedia.org";

export const getWikipediaUrl = (day: Day): string => {
  const url = `${baseUrl}/wiki/${day.number}_de_${t(
    `monthName.${day.month.name}`,
  )}`;
  logger.debug(`Crawl: ${url}`);

  return url;
};

export const enum EfemerideType {
  Efemeride = "efemeride",
  Birth = "birth",
  Death = "death",
}

export interface Efemeride {
  readonly month: number;
  readonly day: number;
  readonly year: number;
  readonly content: string;
  readonly rawContent: string;
  readonly type: EfemerideType;
}
