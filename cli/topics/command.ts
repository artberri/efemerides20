import { Command } from "commander"
import { createLogger, error, info } from "../logger"
import { topicGetter } from "./topicGetter"

export const addGetTopicsCommand = (program: Command): void =>
	void program
		.command("topics")
		.description("get top topics")
		.option("-d, --debug", "show debug messages instead of output")
		.action((options: { debug?: boolean }) => {
			createLogger(!!options.debug)

			topicGetter()
				.then((topics: Topics) =>
					options.debug
						? info(
								`Length: ${topics.length} / First: ${JSON.stringify(
									topics[0],
								)}`,
						  )
						: // eslint-disable-next-line no-console
						  console.log(JSON.stringify(topics)),
				)
				.catch((e: Error) => {
					error(e.toString())
					process.exit(1)
				})
		})
