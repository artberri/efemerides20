import { init } from "i18next"
import type { GetStaticPaths, NextPage } from "next"
import { useTranslation } from "next-i18next"
import { Fragment } from "react"
import { Head } from "../../components/layout/Head/Head"
import { Page } from "../../components/layout/Page/Page"
import { YearOrRange } from "../../components/pages/YearOrRange/YearOrRange"
import { useAbsolutePath } from "../../hooks/useAbsolutePath"
import { useYearOrRange } from "../../hooks/useYearOrRange"
import es from "../../locales/es/common.json"
import { getYearsList, yearRanges } from "../../utils/date"
import { clasifyEphemerides, sortEphemerides } from "../../utils/ephemerides"
import { makeStaticProps } from "../../utils/makeStaticProps"
import { parseIntegerOrThrow } from "../../utils/number"
import { findByYear } from "../../utils/repository"

init({
	lng: "es",
	debug: false,
	resources: {
		es: { translation: es },
	},
})

interface YearOrRangePageProps {
	ephemerides: Ephemerides
	births: Ephemerides
	deaths: Ephemerides
}

const YearOrRangePage: NextPage<YearOrRangePageProps> = ({
	ephemerides,
	births,
	deaths,
}) => {
	const { t } = useTranslation()
	const { path } = useAbsolutePath()
	const data = useYearOrRange()

	let mainKey = "beforeCommonEra"
	let canonical = path(`/anos/hasta-0`)
	if (data.to !== undefined && data.from !== undefined) {
		mainKey = "yearRange"
		canonical = path(`/anos/desde-${data.from}-a-${data.to}`)
	}
	if (data.year !== undefined) {
		mainKey = "year"
		canonical = path(`/anos/${data.year}`)
	}

	return (
		<Fragment>
			<Head
				title={`${t(`${mainKey}.seoTitle`, { ...data })} - ${t("title")}`}
				description={t(`${mainKey}.description`, { ...data })}
				keywords={t(`${mainKey}.keywords`, { ...data })}
				canonical={canonical}
			/>

			<Page
				breadcrumps={{
					current: t(`${mainKey}.breadcrump`, { ...data }),
					previous: [
						["/", t("home.breadcrump")],
						["/anos", t("years.breadcrump")],
					],
				}}
			>
				<YearOrRange
					mainKey={mainKey}
					data={data}
					ephemerides={ephemerides}
					births={births}
					deaths={deaths}
				/>
			</Page>
		</Fragment>
	)
}

const rangeRegexp = /^desde-(\d+)-a-(\d+)$/i

const getBeforeCommonEraEphemerides = (): Promise<YearOrRangePageProps> => {
	return findByYear({ to: 0, from: -50 })
		.then(sortEphemerides)
		.then(clasifyEphemerides)
}

const getYearEphemeridesBySlug = (slug = ""): Promise<YearOrRangePageProps> => {
	const year = parseIntegerOrThrow(slug)

	if (!getYearsList().includes(year)) {
		throw new Error("Not valid year.")
	}

	return findByYear({ from: year, to: year })
		.then(sortEphemerides)
		.then(clasifyEphemerides)
}

const getRangeEphemeridesBySlug = (
	slug = "",
): Promise<YearOrRangePageProps> => {
	const [_, fromString, toString] = rangeRegexp.exec(slug) || []
	const from = parseIntegerOrThrow(fromString)
	const to = parseIntegerOrThrow(toString)

	if (!yearRanges.find(([f, t]) => f === from && t === to)) {
		throw new Error("Not valid year range.")
	}

	return findByYear({ from, to }).then(sortEphemerides).then(clasifyEphemerides)
}

export const getStaticProps = makeStaticProps((params?: { slug: string }) => {
	if (params?.slug === "hasta-0") {
		return getBeforeCommonEraEphemerides()
	}

	return rangeRegexp.test(params?.slug || "")
		? getRangeEphemeridesBySlug(params?.slug)
		: getYearEphemeridesBySlug(params?.slug)
})

export const getStaticPaths: GetStaticPaths<{ slug: string }> = () => {
	const rangePaths = yearRanges.map(([from, to]) => ({
		params: { slug: `desde-${from}-a-${to}` },
	}))
	const years = getYearsList()
	const yearsPaths = years.map((year) => ({
		params: {
			slug: `${year}`,
		},
	}))

	return {
		paths: [{ params: { slug: "hasta-0" } }, ...rangePaths, ...yearsPaths],
		fallback: false,
	}
}

export default YearOrRangePage
