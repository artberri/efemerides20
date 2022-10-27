import { generateNumberArray } from "./number"

export type MonthNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export interface Month {
	readonly name: string
	readonly days: number
	readonly number: MonthNumber
}

export interface Day {
	readonly number: number
	readonly month: Month
}

export const months: Record<MonthNumber, Month> = {
	1: { name: "january", days: 31, number: 1 },
	2: { name: "february", days: 29, number: 2 },
	3: { name: "march", days: 31, number: 3 },
	4: { name: "april", days: 30, number: 4 },
	5: { name: "may", days: 31, number: 5 },
	6: { name: "june", days: 30, number: 6 },
	7: { name: "july", days: 31, number: 7 },
	8: { name: "august", days: 31, number: 8 },
	9: { name: "september", days: 30, number: 9 },
	10: { name: "october", days: 31, number: 10 },
	11: { name: "november", days: 30, number: 11 },
	12: { name: "december", days: 31, number: 12 },
}

export const getMonths = (): ReadonlyArray<Month> => Object.values(months)

export const getMonth = (number: MonthNumber): Month => months[number]

export const getMonthDays = (month: Month): Day[] =>
	generateNumberArray(month.days).map((d) => ({ month, number: d }))

export const getMonthDayOrThrow = (month: Month, day: number): Day => {
	const monthDay = getMonthDays(month).find((d) => d.number === day)
	if (!monthDay) {
		throw new Error(`The month ${month.name} has not ${day} day`)
	}

	return monthDay
}
