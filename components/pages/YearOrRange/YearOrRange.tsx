import { useTranslation } from "next-i18next"
import { Fragment } from "react"
import { useScript } from "../../../hooks/useScript"
import { useYearOrRange } from "../../../hooks/useYearOrRange"
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
	useScript({
		src: "//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-597f3f4cd029203f",
	})
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
		</Fragment>
	)
}
