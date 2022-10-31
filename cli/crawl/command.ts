import { Command } from "commander"
import { MonthNumber } from "../../utils/date"
import { createLogger, error, info } from "../logger"
import { ensureNumberBetween } from "./commandValidation"
import { crawler } from "./crawler"

export const addCrawlCommand = (program: Command): void =>
	void program
		.command("crawl")
		.description("crawl Wikipedia")
		.option("-d, --debug", "show debug messages instead of output")
		.argument("[month]", "month (1 to 12)", ensureNumberBetween(1, 12))
		.argument("[day]", "day (1 to 31)", ensureNumberBetween(1, 31))
		.action(
			(
				month: MonthNumber | undefined,
				day: number | undefined,
				options: { debug?: boolean },
			) => {
				createLogger(!!options.debug)

				const crawl = crawler(month, day)

				crawl()
					.then((e: Ephemerides) =>
						options.debug
							? info(`Length: ${e.length} / First: ${JSON.stringify(e[0])}`)
							: // eslint-disable-next-line no-console
							  console.log(JSON.stringify(e)),
					)
					.catch((e: Error) => {
						error(e.toString())
						process.exit(1)
					})
			},
		)
