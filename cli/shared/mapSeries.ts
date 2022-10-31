export const mapSeries = async <T>(
	iterable: ReadonlyArray<() => Promise<ReadonlyArray<T>>>,
): Promise<ReadonlyArray<T>> => {
	const results: T[] = []

	for (const fn of iterable) {
		results.push(...(await fn()))
	}

	return results
}

export const mapPromises = async <T>(
	iterable: ReadonlyArray<() => Promise<T>>,
): Promise<ReadonlyArray<T>> => {
	const results: T[] = []

	for (const fn of iterable) {
		results.push(await fn())
	}

	return results
}
