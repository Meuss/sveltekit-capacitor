/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			container: {
				center: true,
				padding: '1rem'
			},
			colors: {
				tblack: '#010101',
				tgray: '#2E2E2E',
				torange: '#FF7D00',
				tbeige: '#FFECD1',
				tlightbeige: 'rgba(255,236,209, 0.6)'
			}
		}
	},
	plugins: []
};
