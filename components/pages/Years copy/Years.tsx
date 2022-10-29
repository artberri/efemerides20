import { useTranslation } from "next-i18next"
import Link from "next/link"
import { Fragment } from "react"
import { getYearsList, yearRanges } from "../../../utils/date"
import { Title } from "../../shared/Title/Title"

const years = getYearsList()

export const Years = (): JSX.Element => {
	const { t } = useTranslation()

	return (
		<Fragment>
			<Title>{t("years.title")}</Title>
			<p className="text-center">{t("years.olderYears")}</p>
			<p className="text-center">
				<Link href={"/anos/hasta-0"} legacyBehavior>
					<a className="mt-2 inline-block bg-primary bg-primary px-2 py-1 text-sm text-white transition duration-300 hover:bg-darker hover:bg-darker hover:text-white focus:text-white active:text-white">
						{t("years.beforeCommonEra")}
					</a>
				</Link>
				<span> </span>
				{yearRanges.map(([from, to]) => (
					<Fragment key={`range-${from}-${to}`}>
						<Link href={`/anos/desde-${from}-a-${to}`} legacyBehavior>
							<a className="mt-2 inline-block bg-primary bg-primary px-2 py-1 text-sm text-white transition duration-300 hover:bg-darker hover:bg-darker hover:text-white focus:text-white active:text-white">
								{t("years.fromTo", {
									from,
									to,
								})}
							</a>
						</Link>
						<span> </span>
					</Fragment>
				))}
			</p>
			<p className="text-center">{t("years.perYear")}</p>
			<p className="text-center">
				{years.map((year) => (
					<Fragment key={`year-${year}`}>
						<Link href={`/anos/${year}`} legacyBehavior>
							<a className="mt-2 inline-block bg-primary bg-primary px-2 py-1 text-sm text-white transition duration-300 hover:bg-darker hover:bg-darker hover:text-white focus:text-white active:text-white">
								{t("years.year", {
									year,
								})}
							</a>
						</Link>
						<span> </span>
					</Fragment>
				))}
			</p>
		</Fragment>
	)
}
