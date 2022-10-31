import { t } from "i18next"
import { Day } from "../../utils/date"
import { getUrlContent } from "../shared/getUrlContent"

const baseUrl = "https://es.wikipedia.org"

const getWikipediaUrl = (day: Day): string => {
	const url = `${baseUrl}/wiki/${day.number}_de_${t(
		`monthName.${day.month.name}`,
	)}`

	return url
}

export const getDayHtmlFromWikipedia = (day: Day): Promise<string> => {
	const url = getWikipediaUrl(day)

	return getUrlContent(url)
}
