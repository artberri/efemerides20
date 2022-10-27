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
			className={`text-center bg-gray-100 p-4 lg:p-6 text-gray-800 ${className}`}
		>
			<p className="pb-2">{t("month.chooseDay")}</p>

			<nav>
				{days.map(({ number: day, month }) => {
					const translatedMonth = t(`monthName.${month.name}`)

					return (
						<Fragment key={`day-${day}`}>
							<Link href={`/${day}-de-${translatedMonth}`}>
								<a
									className="transition duration-300 bg-primary hover:bg-darker inline-block text-white hover:text-white active:text-white focus:text-white bg-primary hover:bg-darker w-7 text-sm py-1 mt-2"
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
