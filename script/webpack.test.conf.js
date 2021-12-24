const base = require('./webpack.base.conf')
const { merge } = require('webpack-merge')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const cssnano = require('cssnano')

//配置css刷新
module.exports = merge(base, {
	mode: 'test',
	plugins: [
		new OptimizeCssAssetsWebpackPlugin({
			assetNameRegExp: /.css$/g,
			cssProcessor: cssnano
		})
	],
	optimization: {
		splitChunks: {
			minSize: 0,
			cacheGroups: {
				commons: {
					name: 'commons',
					chunks: 'all',
					minChunks: 2
				}
			}
		}
	}
})
