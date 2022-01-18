const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MinCssExtractPlugin = require('mini-css-extract-plugin') //将CSS解压到单独的文件中
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackBar = require('webpackbar')
const webpack = require('webpack')

module.exports = {
	mode: 'none',
	entry: path.resolve(__dirname, '../src/index.tsx'),
	resolve: {
		alias: {
			'@': path.resolve(__dirname, '../src/')
		},
		extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', '.less', '.json']
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: '[name]_[chunkhash:8].js',
		publicPath: process.env.NODE_ENV === 'development' ? '/' : './'
	},
	module: {
		rules: [
			// 解析ts.tsx
			{
				test: /\.(ts|tsx|js|jsx)?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			//解析css样式
			{
				test: /\.(css|less)$/,
				use: [
					{
						loader:
							process.env.NODE_ENV === 'development' ? 'style-loader' : MinCssExtractPlugin.loader
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
		new WebpackBar(), //显示打包的进度条
		new MinCssExtractPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		})
	]
}
