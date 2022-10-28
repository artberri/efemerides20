module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"primary": "#e74c3c",
				"darker": "#b42516",
				"twitter": "#1d9bf0",
				"twitter-darker": "#0c7abf",
				"facebook": "#3b5998",
				"facebook-darker": "#2f477a",
			},
		},
		fontFamily: {
			sans: ["Roboto", "sans-serif"],
			heading: ["Rajdhani", "Helvetica", "Arial", "sans-serif"],
		},
	},
	plugins: [],
}
