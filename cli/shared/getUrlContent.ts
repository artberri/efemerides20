import https from "https"
import { error, info } from "../logger"

export const getUrlContent = (url: string): Promise<string> =>
	new Promise<string>((resolve, reject) => {
		info(`Start Crawl: ${url}`)
		https
			.get(url, (res) => {
				const data: Uint8Array[] = []

				res.on("data", (chunk) => {
					data.push(chunk)
				})

				res.on("end", () => {
					info(`Crawled: ${url}`)
					resolve(Buffer.concat(data).toString())
				})
			})
			.on("error", (err) => {
				error("Error getting")
				reject(err)
			})
	})
