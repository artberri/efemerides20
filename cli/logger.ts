/* eslint-disable no-console */
import { noop } from "../utils/noop"

export interface Logger {
	debug: (message: unknown) => void
	info: (message: string) => void
	error: (message: string) => void
}

const logger: Logger = {
	debug: noop,
	info: noop,
	error: noop,
}

export const createLogger = (debug: boolean): void => {
	if (!debug) {
		return
	}

	logger.debug = console.log
	logger.info = console.log
	logger.error = console.error
}

export const debug = (message: unknown): void => logger.debug(message)
export const info = (message: string): void => logger.info(message)
export const error = (message: string): void => logger.error(message)
