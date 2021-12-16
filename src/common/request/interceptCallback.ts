//公用的请求拦截回调参数
import { AxiosResponse } from 'axios'
// import { loginUrl } from '@/common/config'
import { Toast } from 'antd-mobile'

interface IResult {
	success: boolean
	message: string
	data: unknown
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const responseCallBack = (response: AxiosResponse<any>) => {
	if (response.headers['content-type'] === 'application/vnd.ms-excel;charset=utf-8') {
		return response.data
	}

	// eslint-disable-next-line prefer-const
	let { success, code, message = '', msg = '', value, data } = response.data,
		resData = data //默认取data，如果取value下面有判断

	message = message || msg
	//取value值
	if (typeof value !== 'undefined') {
		//某些value取值的返回结构中如 {success: true, value: 1}，没有code但是结果是成功的，无法完全用value去判断，这里针对value取值没有code的默认设置为1
		code = typeof code !== 'undefined' ? code : value.code || 1
		message = !message ? value.message || value.msg : ''

		resData = typeof value.data !== 'undefined' ? value.data : value
	}

	const isAccountGet = response.config.url === '/xdnphb/common/account/get'

	let result: IResult = {
		success: false,
		message: '',
		data: null
	}
	if (code === '000999' || code === -999 || value === -999) {
		result = {
			success: false,
			message: '登陆验证失败',
			data: null
		}

		// if (!isVisitorRoute()) {
		// 	window.location.href = `${loginUrl}&backUrl=${encodeURIComponent(window.location.href)}`
		// }
	} else if (value === '401') {
		result = {
			success: false,
			message: '参数验证失败',
			data: null
		}
	} else if (
		(response.status === 200 || success) &&
		(isAccountGet ||
			code === '000000' ||
			code === '1' ||
			code === 1 ||
			code === 0 ||
			code === 200)
	) {
		result = {
			success: true,
			message,
			data: resData
		}
	} else {
		result = {
			success: false,
			message: message || '出错了，请稍后再试~',
			data: null
		}
	}

	if (!result.success) {
		Toast.fail(result.message)
	}

	response.data = result
	return result
}

//错误回调
const errorCallback = (error: Error) => {
	console.log(error)

	Toast.fail(error.message)
	return Promise.reject(error)
}

export { responseCallBack, errorCallback }
