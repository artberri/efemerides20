import { makeBy } from "fp-ts/lib/ReadonlyArray";

export type MonthNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface Month {
  readonly name: string;
  readonly days: number;
  readonly number: MonthNumber;
}

export const months: ReadonlyArray<Month> = [
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

export const getMonth = (number: MonthNumber): Month => {
  const monthRecord: Record<MonthNumber, Month> = months.reduce(
    (record, month) => {
      return {
        ...record,
        [month.number]: month,
      };
    },
    {} as Record<MonthNumber, Month>,
  );

  return monthRecord[number];
};

const plusOne = (i: number) => i + 1;
const generateNumberArray = (count: number) => makeBy(count, plusOne);
export const getMonthDays = (month: Month) => generateNumberArray(month.days);
