import { useTranslation } from "next-i18next"
import { Fragment } from "react"
import { Day as DayItem } from "../../../utils/date"
import { EphemerideList } from "../../shared/EphemerideList/EphemerideList"
import { Title } from "../../shared/Title/Title"
import { NearbyDays } from "./components/NearbyDays/NearbyDays"

export interface DayProps {
	day: DayItem
	ephemerides: Ephemerides
	births: Ephemerides
	deaths: Ephemerides
	topics: Topics
}

export const Day = ({
	day,
	ephemerides,
	births,
	deaths,
	topics,
}: DayProps): JSX.Element => {
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
				topics={topics}
				type="day"
			/>
			<EphemerideList
				title={t("day.subtitle.births", {
					month: t(`monthName.${day.month.name}`),
					day: day.number,
				})}
				ephemerides={births}
				topics={topics}
				type="day"
			/>
			<EphemerideList
				className="pb-6"
				title={t("day.subtitle.deaths", {
					month: t(`monthName.${day.month.name}`),
					day: day.number,
				})}
				ephemerides={deaths}
				topics={topics}
				type="day"
			/>
			<NearbyDays day={day} />
		</Fragment>
	)
}
