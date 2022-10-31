import { findTopNodeUrls } from "../../utils/repository"
import { mapPromises } from "../shared/mapSeries"
import { getDataFromWikipedia } from "./getDataFromWikipedia"

const maxNodes = 100

const wikipediaTopicGetter = (params: { url: string; count: number }) => () =>
	getDataFromWikipedia(params)

export const topicGetter = (): Promise<Topics> =>
	findTopNodeUrls(maxNodes)
		.then((nodes) => nodes.map(wikipediaTopicGetter))
		.then(mapPromises)
