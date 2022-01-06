const base = require('./webpack.base.conf')
const path = require('path')
const { merge } = require('webpack-merge')
const ESLintPlugin = require('eslint-webpack-plugin')
const webpack = require('webpack')

const proxyObj = {
	'/xdnphb/common': {
		target: 'http://test.main.newrank.cn/xdnphb/common',
		changeOrigin: true,
		pathRewrite: { '^/xdnphb/common': '' }
	},
	'/xdnphb/login': {
		target: 'http://test.main.newrank.cn/xdnphb/login',
		changeOrigin: true,
		pathRewrite: { '^/xdnphb/login': '' }
	},
	'/xdnphb/': {
		target: 'http://test.a.newrank.cn',
		changeOrigin: true,
		pathRewrite: { '^': '' }
	}
}

//配置热刷新和source-map
module.exports = merge(base, {
	mode: 'development',
	cache: {
		type: 'filesystem'
	},
	module: {
		rules: [
			//进行eslint检查
			{
				test: /\.(js|ts|tsx)$/,
				loader: 'eslint-loader',
				enforce: 'pre',
				include: [path.join(__dirname, 'src')],
				options: {
					fix: true
				},
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new ESLintPlugin({ extensions: ['js', 'jsx', 'ts', 'tsx'] })
	],
	devtool: 'source-map',
	devServer: {
		host: 'dev.a.newrank.cn',
		contentBase: path.resolve(__dirname, '../dist'),
		hot: true,
		stats: 'errors-only',
		open: true,
		historyApiFallback: true,
		proxy: proxyObj
	}
})
