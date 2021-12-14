import md5 from 'blueimp-md5'
import sampleSize from 'lodash/sampleSize'

const arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']

interface IXYZParams {
	nonce?: string
	xyz?: string
	[propName: string]: any
}

/**
 * 添加xyz参数
 * @param {string} url 请求地址
 * @param {object} data 请求数据
 */
const setXYZ = (url: string, data = {}): IXYZParams => {
	let code = `${url}?AppKey=joker`
	let param: IXYZParams = {}
	const keys = Object.keys(data).sort()

	for (let key of keys) {
		const value = data[key] === null ? '' : data[key]
		param[key] = value
		code += `&${key}=${value}`
	}

	// 随机取数大小为9的数组转为字符串
	const nonce = sampleSize(arr, 9).join('')
	code += `&nonce=${nonce}`

	param.nonce = nonce
	param.xyz = md5(code)
	return param
}

export default setXYZ
