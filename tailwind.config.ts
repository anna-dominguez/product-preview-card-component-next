import type { Config } from 'tailwindcss';

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: '#F2EAE2',
				metal: '#6C7289',
				gunMetal: '#1C232B',
				aquamarine: '#3D8168',
				aquamarineHover: '#1A4032',
			},
			fontFamily: {
				sans: ['Montserrat', 'sans-serif'],
				mono: ['Fraunces', 'serif'],
			},
		},
	},
	plugins: [],
} satisfies Config;
