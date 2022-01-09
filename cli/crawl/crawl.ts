#!/usr/bin/env node

import { pipe } from "fp-ts/function";
import { fold, isSome, Option } from "fp-ts/Option";
import { map as mapA } from "fp-ts/ReadonlyArray";
import { map as mapTE, sequenceSeqArray, TaskEither } from "fp-ts/TaskEither";
import { getMonthDays, Month, months } from "../../utils/date";
import { noop } from "../../utils/noop";
import { crawlDay } from "./crawlDay";

const execSequentally = (tasks: readonly TaskEither<Error, void>[]) => {
  return pipe(tasks, sequenceSeqArray, mapTE(noop));
};

const crawlMonth = (month: Month) =>
  pipe(
    getMonthDays(month),
    mapA((day: number) => crawlDay(month, day)),
    execSequentally,
  );

const crawlYear = () => pipe(months, mapA(crawlMonth), execSequentally);

const crawlMonthOrDay = (month: Month) =>
  fold(
    () => crawlMonth(month),
    (day: number) => crawlDay(month, day),
  );

export type Crawl = (
  m: Option<Month>,
  d: Option<number>,
) => TaskEither<Error, void>;
export const crawl: Crawl = (month, day) =>
  isSome(month) ? pipe(day, crawlMonthOrDay(month.value)) : crawlYear();
