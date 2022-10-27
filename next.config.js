const port = process.env.PORT || 3000

/** @type {import('next').NextConfig} */
module.exports = {
	swcMinify: true,
	reactStrictMode: true,
	images: {
		loader: "custom",
	},
	env: {
		facebookAppId: process.env.FACEBOOK_APP_ID,
		basePath: process.env.BASE_PATH || `http://localhost:${port}`,
	},
}
