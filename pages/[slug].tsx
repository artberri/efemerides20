import { init, t as tFunction } from "i18next"
import type { GetStaticPaths, NextPage } from "next"
import { useTranslation } from "next-i18next"
import { Fragment } from "react"
import { Head } from "../components/layout/Head/Head"
import { Page } from "../components/layout/Page/Page"
import { Day } from "../components/pages/Day/Day"
import { Month } from "../components/pages/Month/Month"
import { useAbsolutePath } from "../hooks/useAbsolutePath"
import { useMonthOrDay } from "../hooks/useMonthOrDay"
import es from "../locales/es/common.json"
import { getMonthDayOrThrow, getMonthDays, getMonths } from "../utils/date"
import {
	clasifyEphemerides,
	shuffle,
	sortEphemerides,
} from "../utils/ephemerides"
import { findMonthByTranslationOrThrow } from "../utils/i18n"
import { makeStaticProps } from "../utils/makeStaticProps"
import { findByDay, findByMonth, findTopTopics } from "../utils/repository"

const daySlugSeparator = "-de-"

init({
	lng: "es",
	debug: false,
	resources: {
		es: { translation: es },
	},
})

interface MonthOrDayPageProps {
	ephemerides: Ephemerides
	births: Ephemerides
	deaths: Ephemerides
	topics?: Topics
}

const MonthOrDayPage: NextPage<MonthOrDayPageProps> = ({
	ephemerides,
	births,
	deaths,
	topics = [],
}) => {
	const { t } = useTranslation()
	const { path } = useAbsolutePath()
	const { day, month } = useMonthOrDay()

	if (month) {
		const translatedMonth = t(`monthName.${month.name}`)

		return (
			<Fragment>
				<Head
					title={`${t("month.seoTitle", {
						month: translatedMonth,
					})} - ${t("title")}`}
					description={t("month.description", {
						month: translatedMonth,
					})}
					keywords={t("month.keywords", {
						month: translatedMonth,
					})}
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

	const translatedMonth = t(`monthName.${day.month.name}`)

	return (
		<Fragment>
			<Head
				title={`${t("day.seoTitle", {
					day: day.number,
					month: translatedMonth,
				})} - ${t("title")}`}
				description={t("day.description", {
					day: day.number,
					month: translatedMonth,
				})}
				keywords={t("day.keywords", {
					day: day.number,
					month: translatedMonth,
				})}
				canonical={path(`/${day.number}-de-${translatedMonth}`)}
			/>

			<Page
				breadcrumps={{
					current: t("day.breadcrump", {
						day: day.number,
					}),
					previous: [
						["/", t("home.breadcrump")],
						[
							`/${translatedMonth}`,
							t("month.breadcrump", {
								month: translatedMonth,
							}),
						],
					],
				}}
			>
				<Day
					day={day}
					ephemerides={ephemerides}
					births={births}
					deaths={deaths}
					topics={topics}
				/>
			</Page>
		</Fragment>
	)
}

const randomTen = (e: Ephemerides): Ephemerides =>
	sortEphemerides(shuffle(e).slice(0, 10))

const getMonthEphemeridesBySlug = (slug = ""): Promise<MonthOrDayPageProps> => {
	const month = findMonthByTranslationOrThrow(tFunction, slug)

	return findByMonth(month)
		.then(clasifyEphemerides)
		.then(({ ephemerides, births, deaths }) => ({
			ephemerides: randomTen(ephemerides),
			births: randomTen(births),
			deaths: randomTen(deaths),
		}))
}

const getDayEphemeridesBySlug = (slug = ""): Promise<MonthOrDayPageProps> => {
	const [dayString, monthString] = slug.split(daySlugSeparator)

	const month = findMonthByTranslationOrThrow(tFunction, monthString || "")
	const day = getMonthDayOrThrow(month, parseInt(dayString || "", 10))

	return Promise.all([
		findTopTopics(),
		findByDay(day).then(sortEphemerides).then(clasifyEphemerides),
	]).then(([topics, clasifiedEphemerides]) => ({
		topics,
		...clasifiedEphemerides,
	}))
}

export const getStaticProps = makeStaticProps((params?: { slug: string }) =>
	params?.slug?.includes(daySlugSeparator)
		? getDayEphemeridesBySlug(params.slug)
		: getMonthEphemeridesBySlug(params?.slug),
)

export const getStaticPaths: GetStaticPaths<{ slug: string }> = () => {
	const months = getMonths()
	const monthPaths = months
		.map((m) => tFunction(`monthName.${m.name}`))
		.map((month) => ({ params: { slug: month } }))
	const dayPaths = months
		.map((m) =>
			getMonthDays(m).map((d) => ({
				params: {
					slug: `${d.number}-de-${tFunction(`monthName.${d.month.name}`)}`,
				},
			})),
		)
		.flat()

	return {
		paths: [...monthPaths, ...dayPaths],
		fallback: false,
	}
}

export default MonthOrDayPage
