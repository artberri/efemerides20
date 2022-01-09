import { InvalidArgumentError } from "commander";
import { chain, getOrElseW, left, map, right } from "fp-ts/Either";
import { flow, pipe } from "fp-ts/function";
import { getMonth as getMonthInfo, Month, MonthNumber } from "../../utils/date";

const throwError = (error: Error) => {
  throw error;
};

const parseInteger = (value: unknown) => {
  const parsedValue = parseInt(value as string, 10);
  if (isNaN(parsedValue)) {
    return left(new InvalidArgumentError("Not a number."));
  }

  return right(parsedValue);
};

const getNumberBetween = (min: number, max: number) => (value: number) => {
  if (value < min || value > max) {
    return left(
      new InvalidArgumentError(`Must be a number between ${min} and ${max}.`),
    );
  }

  return right(value);
};

const getMonth = flow(
  getNumberBetween(1, 12),
  map((m) => getMonthInfo(m as MonthNumber)),
);

const getDay = getNumberBetween(1, 31);

export const validateMonth = flow(
  parseInteger,
  chain(getMonth),
  getOrElseW(throwError),
);

export const validateDay = flow(
  parseInteger,
  chain(getDay),
  getOrElseW(throwError),
);

export const validateDayOfMonth = (day: number) =>
  flow(
    (m: Month) => pipe(day, getNumberBetween(1, m.days)),
    getOrElseW(throwError),
  );
