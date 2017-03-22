var webpack = require('webpack');

module.exports = [{
	entry: {
		bar:'./src/bar'
	},
	output: {
		"path": "./dist",
		filename: '[name].js'
	},
	module: {
		rules: [

		]
	},
	resolveLoader: {

	},
	resolve: {
		modules: [
	      './src',
	      "node_modules"
	    ],
		extensions: ['.js', '.json'],
		alias: {
			Util : 'src/util.js',
		}
	}
},
{
	entry: {
		foo:'./src/foo'
	},
	//入口文件输出配置
	output: {
		"path": "./dist",
		filename: '[name].js'
	},
	module: {
		rules: [

		]
	},
	resolveLoader: {

	},
	resolve: {
		modules: [
	      './src',
	      "node_modules"
	    ],
		extensions: ['.js', '.json'],
		alias: {
			Util : 'src/util.js',
		}
	}
}];