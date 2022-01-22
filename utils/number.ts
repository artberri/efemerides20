import { complement, pipe } from "ramda";
import { fromPredicate } from "./either";

export const parseInteger = pipe(
  (v: unknown) => parseInt(v as string, 10),
  fromPredicate<Error, number>(
    complement(Number.isNaN),
    () => new Error("Not a number."),
  ),
);
