import { Day } from "../../utils/date"
import { parseIntegerOrThrow } from "../../utils/number"
import { RawEfemeride } from "./getRawEfemeridesFromHtml"

const defaultyear = 99999999

const removeStyles = (text: string): string => text.replace(/style="[^"]*"/, "")
const removeHtmlTags = (text: string): string =>
	text.replace(/<\/?[^>]+(>|$)/g, "").trim()
const replaceBeforeChristYears = (text: string): string =>
	text.replace(/([0-9]+) a\. C\./, "-$1")

const getYear = (yearHtml: string): number => {
	const year = replaceBeforeChristYears(removeHtmlTags(yearHtml))
	try {
		return parseIntegerOrThrow(year)
	} catch {
		return defaultyear
	}
}

const splitYearAndContent = (
	rawContent: string,
): { year: number; contentHtml: string } => {
	const raw = removeStyles(rawContent)
	const colonPosition = raw.indexOf(":")
	const yearHtml = raw.substring(0, colonPosition)
	const contentHtml = raw.substring(colonPosition + 1).trim()

	return {
		year: getYear(yearHtml),
		contentHtml,
	}
}

const findNodes = (s: string): EphemerideNode[] => {
	const regex = new RegExp(
		`<a\\s+href=['"](?<url>[^'"]+)['"]\\s*(?:title=['"](?<title>[^'"]+)['"])(?:[^>]+)?\\s*>(?<anchor>(?:(?!</a>).)*)</a>`,
		"gi",
	)

	return Array.from(s.matchAll(regex)).map(({ groups }) => {
		const g = groups as unknown as EphemerideNode

		return {
			url: g.url,
			title: g.title,
			anchor: removeHtmlTags(g.anchor),
		}
	})
}

const mapEfemerideFromRawContent =
	(day: Day) =>
	({ htmlContent, type }: RawEfemeride): Ephemeride => {
		const { contentHtml, year } = splitYearAndContent(htmlContent)

		return {
			month: day.month.number,
			day: day.number,
			year,
			content: removeHtmlTags(contentHtml),
			type,
			nodes: findNodes(contentHtml),
		}
	}

export const mapEfemeridesFromRawContent =
	(day: Day) =>
	(list: readonly RawEfemeride[]): Ephemerides =>
		list
			.map(mapEfemerideFromRawContent(day))
			.filter((f: Ephemeride) => f.year !== defaultyear && f.content.length > 0)
