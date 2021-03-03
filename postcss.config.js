module.exports = {
	plugins: {
		'autoprefixer': {},
		'postcss-pxtorem': {
			rootValue: 100,//结果为：设计稿元素尺寸/100，比如元素宽320px,最终页面会换算成 3.2rem
			propList: ['*']
		}
	}
}
