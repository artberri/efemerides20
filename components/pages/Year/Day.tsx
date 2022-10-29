import { useTranslation } from "next-i18next"
import { Fragment } from "react"
import { useScript } from "../../../hooks/useScript"
import { Day as DayItem } from "../../../utils/date"
import { EphemerideList } from "../../shared/EphemerideList/EphemerideList"
import { Title } from "../../shared/Title/Title"
import { NearbyDays } from "./components/NearbyDays/NearbyDays"

export interface MonthProps {
	day: DayItem
	ephemerides: Ephemerides
	births: Ephemerides
	deaths: Ephemerides
}

export const Day = ({
	day,
	ephemerides,
	births,
	deaths,
}: MonthProps): JSX.Element => {
	useScript({
		src: "//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-597f3f4cd029203f",
	})
	const { t } = useTranslation()

	return (
		<Fragment>
			<Title>
				{t("day.title", {
					month: t(`monthName.${day.month.name}`),
					day: day.number,
				})}
			</Title>
			<NearbyDays day={day} />
			<EphemerideList
				title={t("day.subtitle.events", {
					month: t(`monthName.${day.month.name}`),
					day: day.number,
				})}
				ephemerides={ephemerides}
				type="day"
			/>
			<EphemerideList
				title={t("day.subtitle.births", {
					month: t(`monthName.${day.month.name}`),
					day: day.number,
				})}
				ephemerides={births}
				type="day"
			/>
			<EphemerideList
				className="pb-6"
				title={t("day.subtitle.deaths", {
					month: t(`monthName.${day.month.name}`),
					day: day.number,
				})}
				ephemerides={deaths}
				type="day"
			/>
			<NearbyDays day={day} />
		</Fragment>
	)
}
