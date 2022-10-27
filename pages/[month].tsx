import { init, t as tFunction } from "i18next"
import type { GetStaticPaths, NextPage } from "next"
import { useTranslation } from "next-i18next"
import { Fragment } from "react"
import { Head } from "../components/layout/Head/Head"
import { Page } from "../components/layout/Page/Page"
import { Month } from "../components/pages/Month/Month"
import { useAbsolutePath } from "../hooks/useAbsolutePath"
import { useMonth } from "../hooks/useMonth"
import es from "../locales/es/common.json"
import { getMonths } from "../utils/date"
import {
	clasifyEphemerides,
	shuffle,
	sortEphemerides,
} from "../utils/ephemerides"
import { findMonthByTranslationOrThrow } from "../utils/i18n"
import { makeStaticProps } from "../utils/makeStaticProps"
import { findByMonth } from "../utils/repository"

init({
	lng: "es",
	debug: false,
	resources: {
		es: { translation: es },
	},
})

interface MonthPageProps {
	ephemerides: Ephemerides
	births: Ephemerides
	deaths: Ephemerides
}

const MonthPage: NextPage<MonthPageProps> = ({
	ephemerides,
	births,
	deaths,
}) => {
	const { t } = useTranslation()
	const { path } = useAbsolutePath()
	const month = useMonth()

	const translatedMonth = t(`monthName.${month.name}`)

	return (
		<Fragment>
			<Head
				title={`${t("month.seoTitle", {
					month: translatedMonth,
				})} - ${t("title")}`}
				description={t("month.description")}
				keywords={t("month.keywords")}
				canonical={path(`/${translatedMonth}`)}
			/>

			<Page
				breadcrumps={{
					current: t("month.breadcrump", {
						month: translatedMonth,
					}),
					previous: [["/", t("home.breadcrump")]],
				}}
			>
				<Month
					month={month}
					ephemerides={ephemerides}
					births={births}
					deaths={deaths}
				/>
			</Page>
		</Fragment>
	)
}

export const getStaticProps = makeStaticProps((params?: { month: string }) => {
	const randomTen = (e: Ephemerides): Ephemerides =>
		sortEphemerides(shuffle(e).slice(0, 10))

	const month = findMonthByTranslationOrThrow(tFunction, params?.month || "")

	return findByMonth(month)
		.then(clasifyEphemerides)
		.then(({ ephemerides, births, deaths }) => ({
			ephemerides: randomTen(ephemerides),
			births: randomTen(births),
			deaths: randomTen(deaths),
		}))
})

export const getStaticPaths: GetStaticPaths<{ month: string }> = () => {
	const paths = getMonths()
		.map((m) => tFunction(`monthName.${m.name}`))
		.map((month) => ({ params: { month } }))

	return {
		paths,
		fallback: false,
	}
}

export default MonthPage
