const base = require('./webpack.base.conf')
const path = require('path')
const { merge } = require('webpack-merge')
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
	plugins: [new webpack.HotModuleReplacementPlugin()],
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
