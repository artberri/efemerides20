import { filter, map, pipe, sort } from "ramda";

export interface ClassifiedEphemerides {
  ephemerides: Ephemerides;
  births: Ephemerides;
  deaths: Ephemerides;
}

export const clasifyEphemerides = (
  ephemerides: Ephemerides,
): ClassifiedEphemerides => ({
  ephemerides: filter((e: Ephemeride) => e.type === "ephemeride")(ephemerides),
  births: filter((e: Ephemeride) => e.type === "birth")(ephemerides),
  deaths: filter((e: Ephemeride) => e.type === "death")(ephemerides),
});

export const shuffle: <T>(input: readonly T[]) => readonly T[] = pipe(
  map((value) => ({ value, sort: Math.random() })),
  sort((a, b) => a.sort - b.sort),
  map(({ value }) => value),
);

export const shortEphemerides = sort<Ephemeride>((a, b) => {
  const byYear = a.year - b.year;
  if (byYear !== 0) {
    return byYear;
  }

  const byMonth = a.month - b.month;
  if (byMonth !== 0) {
    return byMonth;
  }

  return a.day - b.day;
});
