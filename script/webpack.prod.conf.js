const base = require('./webpack.base.conf')
const { merge } = require('webpack-merge')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const cssnano = require('cssnano')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const glob = require('glob')
const path = require('path')

//配置css刷新
module.exports = merge(base, {
	mode: 'production',
	plugins: [
		new OptimizeCssAssetsWebpackPlugin({
			assetNameRegExp: /.css$/g,
			cssProcessor: cssnano
		}),
		// 去除无用css
		new PurgecssPlugin({
			paths: glob.sync(`${path.join(__dirname, 'src')}/**/*`, { nodir: true })
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
