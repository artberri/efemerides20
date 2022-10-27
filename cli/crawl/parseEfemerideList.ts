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
const cutFromFirstClosingTagChar = cutFrom(">")

const cutUntilNextH2 = (htmlContent: string): string => {
	const fromUl = cutFromUl(htmlContent)
	const fromFirstClosingTagChar = cutFromFirstClosingTagChar(fromUl)

	return fromFirstClosingTagChar
		.substring(0, fromFirstClosingTagChar.indexOf("<h2"))
		.trim()
}

const getEfemeridesHtml = (html: string): string =>
	cutUntilNextH2(cutFromEfemerides(html))
const getBirthsHtml = (html: string): string =>
	cutUntilNextH2(cutFromBirths(html))
const getDeathsHtml = (html: string): string =>
	cutUntilNextH2(cutFromDeaths(html))

export const parseEfemerideList = (htmlContent: string): readonly string[] => [
	getEfemeridesHtml(htmlContent),
	getBirthsHtml(htmlContent),
	getDeathsHtml(htmlContent),
]
