const port = process.env.PORT || 3000

/** @type {import('next').NextConfig} */
module.exports = {
	output: "export",
	swcMinify: true,
	reactStrictMode: true,
	images: {
		loader: "custom",
	},
	env: {
		facebookAppId: process.env.FACEBOOK_APP_ID || "38171299365",
		basePath: process.env.BASE_PATH || "",
	},
	experimental: {
		largePageDataBytes: 500 * 100000,
	},
}
