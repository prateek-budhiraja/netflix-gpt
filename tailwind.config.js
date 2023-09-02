/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			animation: {
				openmenu: "openmenu 0.3s ease-in",
			},
			keyframes: {
				openmenu: {
					"0%": {
						opacity: "0",
						top: "70px",
					},
					"100%": {
						opacity: "1",
						top: "95px",
					},
				},
			},
		},
	},
	plugins: [],
};
