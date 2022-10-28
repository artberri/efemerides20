import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"
import { Day, getMonthDayOrThrow, Month } from "../utils/date"
import { findMonthByTranslationOrThrow } from "../utils/i18n"

const daySlugSeparator = "-de-"

export const useMonthOrDay = ():
	| { day: Day; month: undefined }
	| { day: undefined; month: Month } => {
	const { t } = useTranslation()
	const router = useRouter()
	const { slug } = router.query

	if (slug?.includes(daySlugSeparator)) {
		const [dayString, monthString] = String(slug).split(daySlugSeparator)
		const month = findMonthByTranslationOrThrow(t, String(monthString))

		return {
			day: getMonthDayOrThrow(month, parseInt(String(dayString), 10)),
			month: undefined,
		}
	}

	return {
		day: undefined,
		month: findMonthByTranslationOrThrow(t, slug as string),
	}
}
