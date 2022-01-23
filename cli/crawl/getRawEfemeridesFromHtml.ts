import { map, pipe, split, trim } from "ramda";

const cutFrom =
  (from: string, preserve = false) =>
  (htmlContent: string): string => {
    const index = htmlContent.indexOf(from);
    const fromIndex = preserve ? index : index + from.length;

    return htmlContent.substring(fromIndex);
  };

const cutFromEfemerides = cutFrom(
  '<span class="mw-headline" id="Acontecimientos">',
);
const cutFromBirths = cutFrom('<span class="mw-headline" id="Nacimientos">');
const cutFromDeaths = cutFrom('<span class="mw-headline" id="Fallecimientos">');

const cutFromUl = cutFrom("<ul", true);
const cutFromFirstClosingTagChar = cutFrom(">");

const cutUntilNextH2 = (htmlContent: string): string => {
  const fromUl = cutFromUl(htmlContent);
  const fromFirstClosingTagChar = cutFromFirstClosingTagChar(fromUl);

  return fromFirstClosingTagChar
    .substring(0, fromFirstClosingTagChar.indexOf("<h2"))
    .trim();
};

const splitByList = split("</li>");

const cleanEfemeride = pipe(cutFrom("<li>"), trim);

export type RawEfemeride = { htmlContent: string; type: EphemerideType };

const getRawEfemerideListByType = (
  type: EphemerideType,
  cutFromFn: (htmlContent: string) => string,
): ((htmlContent: string) => RawEfemeride[]) =>
  pipe(
    cutFromFn,
    cutUntilNextH2,
    splitByList,
    map(cleanEfemeride),
    map((c) => ({
      htmlContent: c,
      type,
    })),
  );

const getRawEfemerides = getRawEfemerideListByType(
  "efemeride",
  cutFromEfemerides,
);
const getRawBirths = getRawEfemerideListByType("birth", cutFromBirths);
const getRawDeaths = getRawEfemerideListByType("death", cutFromDeaths);

export const getRawEfemeridesFromHtml = (
  htmlContent: string,
): ReadonlyArray<RawEfemeride> => [
  ...getRawEfemerides(htmlContent),
  ...getRawBirths(htmlContent),
  ...getRawDeaths(htmlContent),
];
