import * as jq from "node-jq"
import path from "path"
import { Day, Month } from "./date"

const parseEphemerides = (output: string | object): Ephemerides =>
	JSON.parse(output as string)

const jsonPath = path.resolve(process.cwd(), "ephemerides.json")

export const findByMonth = (month: Month): Promise<Ephemerides> =>
	jq
		.run(`[ .[] | select(.month == ${month.number}) ] `, jsonPath, {})
		.then(parseEphemerides)

export const findByDay = (day: Day): Promise<Ephemerides> =>
	jq
		.run(
			`[ .[] | select(.month == ${day.month.number}) | select(.day == ${day.number}) ] `,
			jsonPath,
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
		.run(`[ .[] ${fromClause} ${toClause} ] `, jsonPath, {})
		.then(parseEphemerides)
}

export const findTopNodeUrls = (
	_max: number,
): Promise<ReadonlyArray<{ url: string; count: number }>> =>
	jq
		.run(
			`[ .[] | .nodes[] ] | group_by(.url) | map(.[0] + {"count": length}) | sort_by(.count) | reverse | .[0:${_max}]`,
			jsonPath,
			{},
		)
		.then(
			(output) =>
				JSON.parse(output as string) as ReadonlyArray<{
					url: string
					count: number
				}>,
		)
