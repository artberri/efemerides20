import { useTranslation } from "next-i18next"
import { Fragment } from "react"
import { useYearOrRange } from "../../../hooks/useYearOrRange"
import { AddThis } from "../../shared/AddThis/AddThis"
import { EphemerideList } from "../../shared/EphemerideList/EphemerideList"
import { Title } from "../../shared/Title/Title"

export interface YearOrRangeProps {
	ephemerides: Ephemerides
	births: Ephemerides
	deaths: Ephemerides
	mainKey: string
	data: ReturnType<typeof useYearOrRange>
}

export const YearOrRange = ({
	ephemerides,
	births,
	deaths,
	mainKey,
	data,
}: YearOrRangeProps): JSX.Element => {
	const { t } = useTranslation()

	return (
		<Fragment>
			<Title>{t(`${mainKey}.title`, { ...data })}</Title>
			<EphemerideList
				title={t(`${mainKey}.subtitle.events`, { ...data })}
				ephemerides={ephemerides}
				type="year"
			/>
			<EphemerideList
				title={t(`${mainKey}.subtitle.births`, { ...data })}
				ephemerides={births}
				type="year"
			/>
			<EphemerideList
				className="pb-6"
				title={t(`${mainKey}.subtitle.deaths`, { ...data })}
				ephemerides={deaths}
				type="year"
			/>
			<AddThis
				key={`addthis-script-year-${data.from}-${data.to}-${data.year}`}
			/>
		</Fragment>
	)
}
