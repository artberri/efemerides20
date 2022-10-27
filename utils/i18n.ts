import { getMonths, Month } from "./date"

export const findMonthByTranslationOrThrow = (
	t: (key: string) => string,
	translatedMonth: string,
): Month => {
	const month = getMonths().find(
		(m: Month) => t(`monthName.${m.name}`) === translatedMonth,
	)
	if (!month) {
		throw new Error(`The month ${translatedMonth} does not exist`)
	}

	return month
}
