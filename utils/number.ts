export const generateNumberArray = (n: number): ReadonlyArray<number> =>
	Array.from({ length: n }, (_, i) => i + 1)

export const parseIntegerOrThrow = (v: unknown): number => {
	const int = parseInt(v as string, 10)
	if (Number.isNaN(int)) {
		throw new Error("Not a number.")
	}

	return int
}
