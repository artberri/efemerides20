import { useTranslation } from "next-i18next"
import { Fragment } from "react"
import { getMonthDays, Month as MonthItem } from "../../../utils/date"
import { EphemerideList } from "../../shared/EphemerideList/EphemerideList"
import { Title } from "../../shared/Title/Title"
import { MonthPagination } from "./components/MonthPagination/MonthPagination"

export interface MonthProps {
	month: MonthItem
	ephemerides: Ephemerides
	births: Ephemerides
	deaths: Ephemerides
}

export const Month = ({
	month,
	ephemerides,
	births,
	deaths,
}: MonthProps): JSX.Element => {
	const { t } = useTranslation()
	const days = getMonthDays(month)

	return (
		<Fragment>
			<Title>
				{t("month.title", {
					month: t(`monthName.${month.name}`),
				})}
			</Title>
			<MonthPagination days={days} />
			<EphemerideList
				title={t("month.subtitle.events", {
					month: t(`monthName.${month.name}`),
				})}
				ephemerides={ephemerides}
				type="month"
			/>
			<EphemerideList
				title={t("month.subtitle.births", {
					month: t(`monthName.${month.name}`),
				})}
				ephemerides={births}
				type="month"
			/>
			<EphemerideList
				className="pb-6"
				title={t("month.subtitle.deaths", {
					month: t(`monthName.${month.name}`),
				})}
				ephemerides={deaths}
				type="month"
			/>
			<MonthPagination days={days} />
		</Fragment>
	)
}
