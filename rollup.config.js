import replace from '@rollup/plugin-replace'

export default {
	input: 'index.js',
	output: {
		dir: 'output',
		format: 'cjs'
	},
	plugins: [
		replace({
			// strings must have extra quotes
			SOME_URL: "'https://google.com'",
			delimiters: ['__', '__']
		})
	]
}
