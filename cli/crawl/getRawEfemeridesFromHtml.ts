const cutFrom =
	(from: string, preserve = false) =>
	(htmlContent: string): string => {
		const index = htmlContent.indexOf(from)
		const fromIndex = preserve ? index : index + from.length

		return htmlContent.substring(fromIndex)
	}

const cutFromEfemerides = cutFrom(
	'<span class="mw-headline" id="Acontecimientos">',
)
const cutFromBirths = cutFrom('<span class="mw-headline" id="Nacimientos">')
const cutFromDeaths = cutFrom('<span class="mw-headline" id="Fallecimientos">')

const cutFromUl = cutFrom("<ul", true)
const cutFromLi = cutFrom("<li>")
const cutFromFirstClosingTagChar = cutFrom(">")

const cutUntilNextH2 = (htmlContent: string): string => {
	const fromUl = cutFromUl(htmlContent)
	const fromFirstClosingTagChar = cutFromFirstClosingTagChar(fromUl)

	return fromFirstClosingTagChar
		.substring(0, fromFirstClosingTagChar.indexOf("<h2"))
		.trim()
}

const splitByList = (html: string): ReadonlyArray<string> => html.split("</li>")
const cleanEfemeride = (html: string): string => cutFromLi(html).trim()

export type RawEfemeride = { htmlContent: string; type: EphemerideType }

const getRawEfemerideListByType =
	(type: EphemerideType, cutFromFn: (htmlContent: string) => string) =>
	(htmlContent: string): ReadonlyArray<RawEfemeride> => {
		const listHtml = cutUntilNextH2(cutFromFn(htmlContent))

		return splitByList(listHtml)
			.map(cleanEfemeride)
			.map((c) => ({
				htmlContent: c,
				type,
			}))
	}

const getRawEfemerides = getRawEfemerideListByType(
	"ephemeride",
	cutFromEfemerides,
)
const getRawBirths = getRawEfemerideListByType("birth", cutFromBirths)
const getRawDeaths = getRawEfemerideListByType("death", cutFromDeaths)

export const getRawEfemeridesFromHtml = (
	htmlContent: string,
): ReadonlyArray<RawEfemeride> => [
	...getRawEfemerides(htmlContent),
	...getRawBirths(htmlContent),
	...getRawDeaths(htmlContent),
]
