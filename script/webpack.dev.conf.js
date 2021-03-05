const base = require('./webpack.base.conf')
const path = require('path')
const { merge } = require('webpack-merge')
const webpack = require('webpack')

//配置热刷新和source-map
module.exports = merge(base, {
	mode: 'development',
	plugins: [new webpack.HotModuleReplacementPlugin()],
	devtool: 'source-map',
	devServer: {
		contentBase: path.resolve(__dirname, '../dist'),
		hot: true,
		stats: 'errors-only',
		open: true,
		historyApiFallback: true
	}
})
