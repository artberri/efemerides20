export interface ClassifiedEphemerides {
	ephemerides: Ephemerides
	births: Ephemerides
	deaths: Ephemerides
}

export const clasifyEphemerides = (
	ephemerides: Ephemerides,
): ClassifiedEphemerides => ({
	ephemerides: ephemerides.filter((e: Ephemeride) => e.type === "ephemeride"),
	births: ephemerides.filter((e: Ephemeride) => e.type === "birth"),
	deaths: ephemerides.filter((e: Ephemeride) => e.type === "death"),
})

export const shuffle: <T>(input: readonly T[]) => readonly T[] = (input) =>
	input
		.map((value) => ({ value, sort: Math.random() }))
		.sort((a, b) => a.sort - b.sort)
		.map(({ value }) => value)

export const sortEphemerides = (ephemerides: Ephemerides): Ephemerides =>
	[...ephemerides].sort((a, b) => {
		const byYear = a.year - b.year
		if (byYear !== 0) {
			return byYear
		}

		const byMonth = a.month - b.month
		if (byMonth !== 0) {
			return byMonth
		}

		return a.day - b.day
	})
