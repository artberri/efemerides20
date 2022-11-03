import { getUrlContent } from "../shared/getUrlContent"
import { sluggify } from "./sluggify"

const baseUrl = "https://es.wikipedia.org"

type WikiApiResponse = {
	query: {
		pages: Record<
			number,
			{
				pageid: number
				title: string
				extract: string
				pageprops: {
					page_image_free?: string
					page_image?: string
				}
				imageinfo?: ReadonlyArray<{ thumburl: string }>
			}
		>
	}
}

const getWikipediaApiUrl = (wikiPath: string): string =>
	`${baseUrl}${wikiPath.replace(
		"/wiki/",
		"/w/api.php?action=query&prop=extracts|pageprops&format=json&exintro=&titles=",
	)}`

const getWikipediaImageApiUrl = (imageName: string): string =>
	`${baseUrl}/w/api.php?action=query&format=json&titles=File:${imageName}&prop=imageinfo&&iiprop=url&iiurlwidth=140`

const getApiJson = (content: string): WikiApiResponse => JSON.parse(content)

const getImageFromResponse = (
	response: WikiApiResponse,
): string | undefined => {
	const page = Object.values(response.query.pages)[0]
	if (!page) {
		throw new Error("Bad response from Wikipedia API")
	}

	return page.imageinfo?.[0]?.thumburl
}

const getImageFromApi = (imageName?: string): Promise<string | undefined> => {
	if (!imageName) {
		return Promise.resolve(undefined)
	}

	const apiUrl = getWikipediaImageApiUrl(imageName)

	return getUrlContent(apiUrl).then(getApiJson).then(getImageFromResponse)
}

const getInfoFromApi = (
	response: WikiApiResponse,
): Promise<{
	title: string
	description: string
	image?: string
}> => {
	const page = Object.values(response.query.pages)[0]
	if (!page) {
		throw new Error("Bad response from Wikipedia API")
	}

	const imageName = page.pageprops.page_image_free || page.pageprops.page_image

	const extract = page.extract.replace(
		/<p class=\"mw-empty-elt\">(.*?)<\/p>/gs,
		"",
	)

	const description = extract
		.substring(0, extract.indexOf("</p>") + 4)
		.replace(/<dl>(.*?)<\/dl>/gs, "")

	return getImageFromApi(imageName).then((image) => ({
		title: page.title,
		description,
		image,
	}))
}

export const getDataFromWikipedia = ({
	url,
	count,
}: {
	url: string
	count: number
}): Promise<Topic> => {
	const apiUrl = getWikipediaApiUrl(url)

	return getUrlContent(apiUrl)
		.then(getApiJson)
		.then(getInfoFromApi)
		.then(({ description, title, image }) => ({
			description,
			title,
			image,
			count,
			url,
			slug: sluggify(title),
		}))
}
