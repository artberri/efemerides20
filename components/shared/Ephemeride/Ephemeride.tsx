import { decode } from "html-entities"
import { Trans, useTranslation } from "next-i18next"
import Link from "next/link"
import { getMonth, MonthNumber } from "../../../utils/date"

export interface EphemerideProps {
	ephemeride: Ephemeride
	topics: Topics
	type: "month" | "day" | "year" | "topic"
}

const replaceJSX = (
	content: ReadonlyArray<string>,
	topics: ReadonlyArray<{
		anchor: string
		slug: string
	}>,
): ReadonlyArray<string | JSX.Element> =>
	content.map((str, key) => {
		const found = topics.find((topic) => topic.anchor === str)
		if (found) {
			return (
				<Link
					key={`node-link-${key}-${found.slug}`}
					href={`/nodos/${found.slug}`}
				>
					{found.anchor}
				</Link>
			)
		}

		return str
	})

const toArray = (text: string, finds: string[]): ReadonlyArray<string> => {
	let output = text
	for (const find of finds) {
		output = output.replaceAll(find, `||${find}||`)
	}

	return output.split("||").filter((str) => !!str)
}

export const Ephemeride = ({
	ephemeride,
	type,
	topics,
}: EphemerideProps): JSX.Element => {
	const { t } = useTranslation()
	const month = getMonth(ephemeride.month as MonthNumber)
	const yearString =
		ephemeride.year < 0
			? `${Math.abs(ephemeride.year)} ${t("common.beforeCommonEra")}`
			: String(ephemeride.year)
	const translatedMonth = t(`monthName.${month.name}`)

	const topTopics = ephemeride.nodes
		.map((node) => {
			const foundTopic = topics.find((topic) => topic.url === node.url)
			if (!foundTopic) {
				return undefined
			}

			return {
				anchor: node.anchor,
				slug: foundTopic.slug,
			}
		})
		.filter((tuple) => tuple !== undefined) as ReadonlyArray<{
		anchor: string
		slug: string
	}>

	const content = toArray(
		decode(ephemeride.content),
		topTopics.map((topic) => topic.anchor),
	)

	const replacedContent = replaceJSX(content, topTopics)

	return (
		<p key={ephemeride.content}>
			<Trans
				i18nKey={`${type}.date`}
				components={{
					emphatize: <strong>_</strong>,
					daylink: (
						<Link href={`/${ephemeride.day}-de-${translatedMonth}`}>_</Link>
					),
				}}
				values={{
					day: ephemeride.day,
					month: translatedMonth,
					year: yearString,
				}}
			/>{" "}
			{ephemeride.type === "birth" && t("action.borns")}{" "}
			{ephemeride.type === "death" && t("action.deads")} {replacedContent}
		</p>
	)
}
