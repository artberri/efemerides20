import { flow } from "fp-ts/function";

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

const getEfemeridesHtml = flow(cutFromEfemerides, cutUntilNextH2);
const getBirthsHtml = flow(cutFromBirths, cutUntilNextH2);
const getDeathsHtml = flow(cutFromDeaths, cutUntilNextH2);

export const parseDayHtml = (htmlContent: string): readonly string[] => {
  // eslint-disable-next-line no-console
  // console.log(getDeathsHtml(htmlContent));

  return [
    getEfemeridesHtml(htmlContent),
    getBirthsHtml(htmlContent),
    getDeathsHtml(htmlContent),
  ];
};
