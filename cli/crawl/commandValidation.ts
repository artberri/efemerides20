import { InvalidArgumentError } from "commander";
import { applyTo, pipe } from "ramda";
import { Day, getMonth, getMonthDay, MonthNumber } from "../../utils/date";
import {
  chain,
  Either,
  fromPredicate,
  mapLeft,
  option as optionE,
} from "../../utils/either";
import { option as optionM } from "../../utils/maybe";
import { parseInteger } from "../../utils/number";
import { error } from "../logger";

const validateNumberBetween = (
  min: number,
  max: number,
): ((value: number) => Either<InvalidArgumentError, number>) =>
  fromPredicate(
    (n: number) => n >= min && n <= max,
    () =>
      new InvalidArgumentError(`Must be a number between ${min} and ${max}.`),
  );

export const ensureNumberBetween = (
  min: number,
  max: number,
): ((v: unknown) => number) =>
  pipe(
    parseInteger,
    mapLeft((e) => new InvalidArgumentError(e.message)),
    chain(validateNumberBetween(min, max)),
    optionE<number>((e) => {
      throw e;
    }),
  );

export const getValidMonthDay = (month: MonthNumber, day: number): Day =>
  pipe(
    getMonth,
    getMonthDay,
    applyTo(day),
    optionM((): Day => {
      error(
        `command-argument value '${day}' is invalid for argument 'day'. Must be a valid day value for month ${month}`,
      );
      process.exit(1);
    }),
  )(month);
