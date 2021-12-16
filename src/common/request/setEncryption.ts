import md5 from 'blueimp-md5'
import sampleSize from 'lodash/sampleSize'

//获取nonce
const getNonce = (): string => {
	const _arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
	return sampleSize(_arr, 9).join('')
}

//排序规则函数
const sortFilter = (a: string | number, b: string | number) => {
	if (a === b) {
		return 0
	}
	return a > b ? 1 : -1
}

//设置xyz和nonce加密
interface IReturnParams extends IParams {
	xyz: string
	nonce: string
}

interface IParams {
	[propName: string]: any
}

const setEncryption = (url: string, data: IParams = {}, isJson?: boolean): IReturnParams => {
	const arr = Object.keys(data).sort(sortFilter)
	let code = `${url}?AppKey=joker`

	const _params: IParams = arr.reduce((prev: IParams, key: string) => {
		prev[key] = data[key]
		if (!isJson) {
			code += `&${key}=${data[key]}`
		}
		return prev
	}, {})

	const nonce = getNonce()
	code += `&nonce=${nonce}`

	const _xyz = md5(code)
	const _nonce = nonce

	return {
		..._params,
		xyz: _xyz,
		nonce: _nonce
	}
}

export default setEncryption
