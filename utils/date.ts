import { IO } from "fp-ts/IO";
import { pipe } from "fp-ts/lib/function";
import { fromNullable } from "fp-ts/Option";
import { makeBy, map } from "fp-ts/ReadonlyArray";

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

const months: ReadonlyArray<Month> = [
  { name: "january", days: 31, number: 1 },
  { name: "february", days: 29, number: 2 },
  { name: "march", days: 31, number: 3 },
  { name: "april", days: 30, number: 4 },
  { name: "may", days: 31, number: 5 },
  { name: "june", days: 30, number: 6 },
  { name: "july", days: 31, number: 7 },
  { name: "august", days: 31, number: 8 },
  { name: "september", days: 30, number: 9 },
  { name: "october", days: 31, number: 10 },
  { name: "november", days: 30, number: 11 },
  { name: "december", days: 31, number: 12 },
];

const plusOne = (i: number) => i + 1;
const generateNumberArray = (count: number) => makeBy(count, plusOne);

export const getMonths: IO<ReadonlyArray<Month>> = () => months;

export const getMonth = (number: number) =>
  fromNullable(months.find((m) => m.number === number));

export const getMonthDays = (month: Month) =>
  pipe(
    month.days,
    generateNumberArray,
    map((d): Day => ({ month, number: d })),
  );

export const getMonthDay = (month: Month, day: number) =>
  pipe(month, getMonthDays, (days) =>
    fromNullable(days.find((d) => d.number === day)),
  );
