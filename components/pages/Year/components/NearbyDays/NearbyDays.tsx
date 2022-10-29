import { useTranslation } from "next-i18next"
import Link from "next/link"
import { Day, getSiblingDays } from "../../../../../utils/date"

export interface NearbyDaysProps {
	day: Day
	className?: string
}

export const NearbyDays = ({
	day,
	className,
}: NearbyDaysProps): JSX.Element => {
	const { t } = useTranslation()
	const { next, prev } = getSiblingDays(day)

	const translatedNextMonth = t(`monthName.${next.month.name}`)
	const translatedPrevMonth = t(`monthName.${prev.month.name}`)

	return (
		<nav className={`pb-2 text-sm ${className}`}>
			<p className="text-sm">
				{t("day.nearby")}:{" "}
				<span>
					<Link
						href={`/${prev.number}-de-${translatedPrevMonth}`}
						legacyBehavior
					>
						<a
							className="underline"
							title={t("day.title", {
								day: prev.number,
								month: translatedPrevMonth,
							})}
						>
							{t("day.name", {
								day: prev.number,
								month: translatedPrevMonth,
							})}
						</a>
					</Link>{" "}
					{t("common.and")}{" "}
					<Link
						href={`/${next.number}-de-${translatedNextMonth}`}
						legacyBehavior
					>
						<a
							title={t("day.title", {
								day: next.number,
								month: translatedNextMonth,
							})}
							className="underline"
						>
							{t("day.name", {
								day: next.number,
								month: translatedNextMonth,
							})}
						</a>
					</Link>
				</span>
			</p>
		</nav>
	)
}
