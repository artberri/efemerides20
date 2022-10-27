module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: { colors: { primary: "#e74c3c", darker: "#b42516" } },
		fontFamily: {
			sans: ["Roboto", "sans-serif"],
			heading: ["Rajdhani", "Helvetica", "Arial", "sans-serif"],
		},
	},
	plugins: [],
}
