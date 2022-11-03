import * as jq from "node-jq"
import path from "path"
import { Day, Month } from "./date"

const parseEphemerides = (output: string | object): Ephemerides =>
	JSON.parse(output as string)

const ephemeridesJsonPath = path.resolve(process.cwd(), "ephemerides.json")
const topicsJsonPath = path.resolve(process.cwd(), "topics.json")

export const findByMonth = (month: Month): Promise<Ephemerides> =>
	jq
		.run(
			`[ .[] | select(.month == ${month.number}) ] `,
			ephemeridesJsonPath,
			{},
		)
		.then(parseEphemerides)

export const findByDay = (day: Day): Promise<Ephemerides> =>
	jq
		.run(
			`[ .[] | select(.month == ${day.month.number}) | select(.day == ${day.number}) ] `,
			ephemeridesJsonPath,
			{},
		)
		.then(parseEphemerides)

export const findByYear = ({
	from,
	to,
}: {
	from?: number
	to?: number
}): Promise<Ephemerides> => {
	const fromClause = from !== undefined ? `| select(.year >= ${from})` : ""
	const toClause = to !== undefined ? `| select(.year <= ${to})` : ""

	return jq
		.run(`[ .[] ${fromClause} ${toClause} ] `, ephemeridesJsonPath, {})
		.then(parseEphemerides)
}

export const findTopNodeUrls = (
	max: number,
): Promise<ReadonlyArray<{ url: string; count: number }>> =>
	jq
		.run(
			`[ .[] | .nodes[] | select(.url | index("/wiki/Wikipedia:Verificabilidad") | not) ] | group_by(.url) | map(.[0] + {"count": length}) | sort_by(.count) | reverse | .[0:${max}]`,
			ephemeridesJsonPath,
			{},
		)
		.then(
			(output) =>
				JSON.parse(output as string) as ReadonlyArray<{
					url: string
					count: number
				}>,
		)

export const findTopTopics = (): Promise<Topics> =>
	jq
		.run(`[ .[] ]`, topicsJsonPath, {})
		.then((output) => JSON.parse(output as string) as Topics)

export const findTopTopic = (slug: string): Promise<Topic> =>
	jq
		.run(`.[] | select(.slug == "${slug}")`, topicsJsonPath, {})
		.then((output) => JSON.parse(output as string) as Topic)
