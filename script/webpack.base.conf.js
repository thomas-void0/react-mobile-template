const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const MinCssExtractPlugin = require('mini-css-extract-plugin') //将CSS解压到单独的文件中
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackBar = require('webpackbar')
const StylelintPlugin = require('stylelint-webpack-plugin') //规范less的书写规则
const webpack = require('webpack')

// const CopyWebpackPlugin = require("copy-webpack-plugin")

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

module.exports = {
	mode: 'none',
	entry: path.resolve(__dirname, '../src/index.tsx'),
	resolve: {
		alias: {
			'@src': path.resolve(__dirname, '../src/'),
			'@common': path.resolve(__dirname, '../src/common/'),
			'@pages': path.resolve(__dirname, '../src/pages/'),
			'@components': path.resolve(__dirname, '../src/components/'),
			'@assets': path.resolve(__dirname, '../src/assets/'),
			'@typings': path.resolve(__dirname, '../src/typings/')
		},
		extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', '.less', '.json']
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: '[name]_[chunkhash:8].js',
		publicPath: process.env.ENV_LWD === 'development' ? '/' : './'
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
			},
			// 解析ts.tsx
			{
				test: /\.(ts|tsx|js|jsx)?$/,
				// loader: 'awesome-typescript-loader',
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			//解析css样式
			{
				test: /\.(css|less)$/,
				use: [
					{
						loader:
							process.env.ENV_LWD === 'development' ? 'style-loader' : MinCssExtractPlugin.loader
					},
					{ loader: 'css-loader' },
					{ loader: 'postcss-loader' },
					{
						loader: 'less-loader',
						options: { lessOptions: { javascriptEnabled: true } }
					}
				]
			},
			// 解析图片
			{
				test: /\.(png|svg|jpg|gif|jpeg)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10240,
							name: '[name]_[hash:8].[ext]'
						}
					}
				]
			},
			// 解析MP3
			{
				test: /\.(mp3)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					name: 'audios/[name].[ext]',
					limit: 10
				}
			},
			//解析字体文件
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							name: '[name]_[hash:8].[ext]'
						}
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../public/index.html'), //需要被压缩的html文件路径
			removeComments: true,
			collapseWhitespace: true,
			removeRedundantAttributes: true,
			useShortDoctype: true,
			removeEmptyAttributes: true,
			removeStyleLinkTypeAttributes: true,
			keepClosingSlash: true,
			minifyJS: true,
			minifyCSS: true,
			minifyURLs: true
		}),
		new CleanWebpackPlugin(),
		new ESLintPlugin({ extensions: ['js', 'jsx', 'ts', 'tsx'] }), //eslint插件
		new WebpackBar(), //显示打包的进度条
		new MinCssExtractPlugin(),
		new StylelintPlugin(stylesOptions),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		})
	]
}
