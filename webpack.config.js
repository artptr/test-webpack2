'use strict'
module.exports = {
	entry: {
		home: './frontend/home.js'
	},
	output: {
		path: __dirname + '/public',
		filename: '[name].js',
		library: '[name]'
	},
	watch: true,
	plugins: [],
	module: {
		rules: []
	}
};
