import { useTranslation } from "next-i18next"
import Link from "next/link"
import { Fragment } from "react"
import { Day } from "../../../../../utils/date"

export interface MonthPaginationProps {
	days: Day[]
	className?: string
}

export const MonthPagination = ({
	days,
	className,
}: MonthPaginationProps): JSX.Element => {
	const { t } = useTranslation()

	return (
		<div
			className={`bg-gray-100 p-4 text-center text-gray-800 lg:p-6 ${className}`}
		>
			<p className="pb-2">{t("month.chooseDay")}</p>

			<nav>
				{days.map(({ number: day, month }) => {
					const translatedMonth = t(`monthName.${month.name}`)

					return (
						<Fragment key={`day-${day}`}>
							<Link href={`/${day}-de-${translatedMonth}`} legacyBehavior>
								<a
									className="mt-2 inline-block w-7 bg-primary bg-primary py-1 text-sm text-white transition duration-300 hover:bg-darker hover:bg-darker hover:text-white focus:text-white active:text-white"
									title={t("day.title", {
										day,
										month: translatedMonth,
									})}
								>
									{day}
								</a>
							</Link>{" "}
						</Fragment>
					)
				})}
			</nav>
		</div>
	)
}
