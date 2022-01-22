import { filter, indexOf, map, pipe, replace, trim } from "ramda";
import { Day } from "../../utils/date";
import { option } from "../../utils/either";
import { parseInteger } from "../../utils/number";
import { RawEfemeride } from "./getRawEfemeridesFromHtml";
import { Efemeride } from "./todo";

const defaultyear = 99999999;

const removeStyles = replace(/style="[^"]*"/, "");
const removeHtmlTags = pipe(replace(/<\/?[^>]+(>|$)/g, ""), trim);
const replaceBeforeChristYears = replace(/([0-9]+) a\. C\./, "-$1");

const getYear = pipe(
  removeHtmlTags,
  replaceBeforeChristYears,
  parseInteger,
  option(() => defaultyear),
);

const splitYearAndContent = (
  rawContent: string,
): { year: number; contentHtml: string } => {
  const raw = removeStyles(rawContent);
  const colonPosition = indexOf(":", raw);
  const yearHtml = raw.substring(0, colonPosition);
  const contentHtml = trim(raw.substring(colonPosition + 1));

  return {
    year: getYear(yearHtml),
    contentHtml,
  };
};

const mapEfemerideFromRawContent =
  (day: Day) =>
  ({ htmlContent, type }: RawEfemeride): Efemeride => {
    const { contentHtml, year } = splitYearAndContent(htmlContent);

    return {
      month: day.month.number,
      day: day.number,
      year,
      rawContent: removeHtmlTags(contentHtml),
      content: contentHtml,
      type,
    };
  };

export const mapEfemeridesFromRawContent = (
  day: Day,
): ((list: readonly RawEfemeride[]) => Efemeride[]) =>
  pipe(
    map(mapEfemerideFromRawContent(day)),
    filter((f: Efemeride) => f.year !== defaultyear),
  );
