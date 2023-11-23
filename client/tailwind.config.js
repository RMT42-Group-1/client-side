import tailwindCss3d from 'tailwindcss-3d';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			rotate: {
				30: '30deg',
				60: '60deg',
				180: '180deg',
			},
		},
	},
	plugins: [tailwindCss3d],
};
