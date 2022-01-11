import { InvalidArgumentError } from "commander";
import { Either, getOrElseW, left, right } from "fp-ts/Either";
import { flow } from "fp-ts/function";

const throwError = (error: Error): void => {
  throw error;
};

const parseInteger = (value: unknown): Either<InvalidArgumentError, number> => {
  const parsedValue = parseInt(value as string, 10);
  if (isNaN(parsedValue)) {
    return left(new InvalidArgumentError("Not a number."));
  }

  return right(parsedValue);
};

export const validateInteger = flow(parseInteger, getOrElseW(throwError));
