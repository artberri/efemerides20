import { decode } from "html-entities"
import { Trans, useTranslation } from "next-i18next"
import Link from "next/link"
import { getMonth, MonthNumber } from "../../../utils/date"

export interface EphemerideProps {
	ephemeride: Ephemeride
	type: "month" | "day" | "year"
}

export const Ephemeride = ({
	ephemeride,
	type,
}: EphemerideProps): JSX.Element => {
	const { t } = useTranslation()
	const month = getMonth(ephemeride.month as MonthNumber)
	const yearString =
		ephemeride.year < 0
			? `${Math.abs(ephemeride.year)} ${t("common.beforeCommonEra")}`
			: String(ephemeride.year)
	const translatedMonth = t(`monthName.${month.name}`)

	return (
		<p key={ephemeride.content}>
			<Trans
				i18nKey={`${type}.date`}
				components={{
					emphatize: <strong>_</strong>,
					daylink: (
						<Link href={`/${ephemeride.day}-de-${translatedMonth}`}>_</Link>
					),
				}}
				values={{
					day: ephemeride.day,
					month: translatedMonth,
					year: yearString,
				}}
			/>{" "}
			{ephemeride.type === "birth" && t("action.borns")}{" "}
			{ephemeride.type === "death" && t("action.deads")}{" "}
			{decode(ephemeride.content)}
		</p>
	)
}
