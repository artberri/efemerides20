import { InvalidArgumentError } from "commander"
import {
	Day,
	getMonth,
	getMonthDayOrThrow,
	MonthNumber,
} from "../../utils/date"
import { parseIntegerOrThrow } from "../../utils/number"
import { error } from "../logger"

const validateNumberBetween = ({
	min,
	max,
	value,
}: {
	min: number
	max: number
	value: number
}): number => {
	if (value >= min && value <= max) {
		return value
	}

	throw new Error(`Must be a number between ${min} and ${max}.`)
}

export const ensureNumberBetween =
	(min: number, max: number) =>
	(value: unknown): number => {
		try {
			return validateNumberBetween({
				min,
				max,
				value: parseIntegerOrThrow(value),
			})
		} catch (e) {
			if (e instanceof Error) {
				throw new InvalidArgumentError(e.message)
			}

			throw e
		}
	}

export const getValidMonthDay = (
	monthNumber: MonthNumber,
	dayNumber: number,
): Day => {
	try {
		const month = getMonth(monthNumber)

		return getMonthDayOrThrow(month, dayNumber)
	} catch {
		error(
			`command-argument value '${dayNumber}' is invalid for argument 'day'. Must be a valid day value for month ${monthNumber}`,
		)
		process.exit(1)
	}
}
