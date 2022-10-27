import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"
import { Month } from "../utils/date"
import { findMonthByTranslationOrThrow } from "../utils/i18n"

export const useMonth = (): Month => {
	const { t } = useTranslation()
	const router = useRouter()
	const { month } = router.query

	return findMonthByTranslationOrThrow(t, month as string)
}
