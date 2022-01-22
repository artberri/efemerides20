import { add, find, map, pipe, times, values } from "ramda";
import { fromNullable, Maybe } from "./maybe";

export type MonthNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface Month {
  readonly name: string;
  readonly days: number;
  readonly number: MonthNumber;
}

export interface Day {
  readonly number: number;
  readonly month: Month;
}

const months: Record<MonthNumber, Month> = {
  1: { name: "january", days: 31, number: 1 },
  2: { name: "february", days: 29, number: 2 },
  3: { name: "march", days: 31, number: 3 },
  4: { name: "april", days: 30, number: 4 },
  5: { name: "may", days: 31, number: 5 },
  6: { name: "june", days: 30, number: 6 },
  7: { name: "july", days: 31, number: 7 },
  8: { name: "august", days: 31, number: 8 },
  9: { name: "september", days: 30, number: 9 },
  10: { name: "october", days: 31, number: 10 },
  11: { name: "november", days: 30, number: 11 },
  12: { name: "december", days: 31, number: 12 },
};

const generateNumberArray = times(add(1));

export const getMonths = (): ReadonlyArray<Month> => values(months);

export const getMonth = (number: MonthNumber): Month => months[number];

export const getMonthDays = (month: Month): Day[] =>
  pipe(
    generateNumberArray,
    map((d) => ({ month, number: d })),
  )(month.days);

export const getMonthDay =
  (month: Month) =>
  (day: number): Maybe<Day> =>
    pipe(
      getMonthDays,
      find((d) => d.number === day),
      fromNullable,
    )(month);
