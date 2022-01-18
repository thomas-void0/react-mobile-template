const base = require('./webpack.base.conf')
const { merge } = require('webpack-merge')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const cssnano = require('cssnano')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const glob = require('glob')
const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin')
const StylelintPlugin = require('stylelint-webpack-plugin') //规范less的书写规则

//stylelint的匹配项
const stylesOptions = {
	context: './src', //指示文件根的字符串
	configFile: path.resolve(__dirname, '../stylelint.config.js'), //指定styelint要使用的配置文件位置
	files: '**/**/*.less', //指定查找文件的glob模式。必须相对于options.context
	quiet: true, // 如果设置为true，将只处理和报告错误，并忽略警告。
	failOnError: false, //如果有任何错误，都会导致模块构建失败
	syntax: 'less',
	fix: true //修复尽可能多的错误
}

//配置css刷新
module.exports = merge(base, {
	mode: 'production',
	module: {
		rules: [
			// eslint检测
			{
				test: /\.(ts|tsx|js|jsx)?$/,
				enforce: 'pre',
				include: [path.join(__dirname, 'src')],
				exclude: /node_modules/,
				loader: 'eslint-loader',
				options: {
					fix: true
				}
			}
		]
	},
	plugins: [
		new OptimizeCssAssetsWebpackPlugin({
			assetNameRegExp: /.css$/g,
			cssProcessor: cssnano
		}),
		// 去除无用css
		new PurgecssPlugin({
			paths: glob.sync(`${path.join(__dirname, 'src')}/**/*`, { nodir: true })
		}),
		new StylelintPlugin(stylesOptions),
		new ESLintPlugin({ extensions: ['js', 'jsx', 'ts', 'tsx'] })
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
