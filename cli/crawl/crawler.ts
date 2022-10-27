import {
	Day,
	getMonth,
	getMonthDays,
	getMonths,
	Month,
	MonthNumber,
} from "../../utils/date"
import { getValidMonthDay } from "./commandValidation"
import { getDayHtmlFromWikipedia } from "./getDayHtmlFromWikipedia"
import { getRawEfemeridesFromHtml } from "./getRawEfemeridesFromHtml"
import { mapEfemeridesFromRawContent } from "./mapEfemeridesFromRawContent"

export type CrawlTask = () => Promise<Ephemerides>

const mapSeries = async <T>(
	iterable: ReadonlyArray<() => Promise<ReadonlyArray<T>>>,
): Promise<ReadonlyArray<T>> => {
	const results: T[] = []

	for (const fn of iterable) {
		results.push(...(await fn()))
	}

	return results
}

const crawlDay =
	(day: Day): CrawlTask =>
	() =>
		getDayHtmlFromWikipedia(day)
			.then(getRawEfemeridesFromHtml)
			.then(mapEfemeridesFromRawContent(day))

const crawlMonth =
	(month: Month): CrawlTask =>
	() =>
		mapSeries(getMonthDays(month).map(crawlDay))

const crawlYear: CrawlTask = () => mapSeries(getMonths().map(crawlMonth))

export const crawler = (month?: MonthNumber, day?: number): CrawlTask => {
	if (!!month && !!day) {
		return crawlDay(getValidMonthDay(month as MonthNumber, day as number))
	}

	if (!!month) {
		return crawlMonth(getMonth(month as MonthNumber))
	}

	return crawlYear
}
