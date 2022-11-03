const isStaticPage = (path) => path.startsWith("/pagina/")
const isHome = (path) => path === "/"
const isTopics = (path) => path === "/nodos"
const isTopic = (path) => path.startsWith("/nodos/")
const isYearList = (path) => path === "/anos"
const isYear = (path) => path.startsWith("/anos/")

/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: process.env.BASE_PATH || "https://www.efemerides20.com",
	generateRobotsTxt: false,
	generateIndexSitemap: false,
	outDir: "out",
	changefreq: "monthly",
	transform: async (config, path) => {
		if (isStaticPage(path)) {
			return null
		}

		const output = {
			loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
			changefreq: config.changefreq,
			priority: config.priority,
			lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
			alternateRefs: config.alternateRefs ?? [],
		}

		if (isHome(path)) {
			output.priority = 1
		}

		if (isTopics(path)) {
			output.priority = 0.4
		}

		if (isTopic(path)) {
			output.priority = 0.8
		}

		if (isYearList(path)) {
			output.priority = 0.4
			output.changefreq = "yearly"
		}

		if (isYear(path)) {
			output.priority = 0.5
		}

		return output
	},
}
