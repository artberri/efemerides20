import * as jq from "node-jq"
import path from "path"
import { Month } from "./date"

export const findByMonth = (month: Month): Promise<Ephemerides> =>
	jq
		.run(
			`[ .[]  | select(.month == ${month.number}) ] `,
			path.resolve(__dirname, "../../../ephemerides.json"),
			{},
		)
		.then((output) => JSON.parse(output as string) as Ephemerides)
