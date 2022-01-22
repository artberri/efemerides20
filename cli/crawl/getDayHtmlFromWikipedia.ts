import { FutureInstance } from "fluture";
import { t } from "i18next";
import { pipe } from "ramda";
import { Day } from "../../utils/date";
import { getUrlContent } from "../../utils/getUrlContent";

const baseUrl = "https://es.wikipedia.org";

const getWikipediaUrl = (day: Day): string => {
  const url = `${baseUrl}/wiki/${day.number}_de_${t(
    `monthName.${day.month.name}`,
  )}`;

  return url;
};

export const getDayHtmlFromWikipedia = (
  day: Day,
): FutureInstance<Error, string> => pipe(getWikipediaUrl, getUrlContent)(day);
