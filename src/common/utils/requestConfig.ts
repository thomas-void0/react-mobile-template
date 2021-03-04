import { extend, ResponseError, Context } from 'umi-request'
import qs from 'qs'
import setXYZ from './setXYZ'
import { Toast } from 'antd-mobile'
import { ReturnResData } from './utilsTypings'

const codeMessage = {
	200: '服务器成功返回请求的数据。',
	201: '新建或修改数据成功。',
	202: '一个请求已经进入后台排队（异步任务）。',
	204: '删除数据成功。',
	400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
	401: '参数加密验证失败，请前端同学检查参数。',
	403: '用户访问权限。',
	404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
	405: '请求方法不被允许。',
	406: '请求的格式不可得。',
	410: '请求的资源被永久删除，且不会再得到的。',
	422: '当创建一个对象时，发生一个验证错误。',
	500: '服务器发生错误，请检查服务器。',
	502: '网关错误。',
	503: '服务不可用，服务器暂时过载或维护。',
	504: '网关超时。'
}

// 异常处理程序
const errorHandler = (error: ResponseError) => {
	const { response } = error

	if (response && response.status) {
		const errorText = codeMessage[response.status] || response.statusText
		const { status, url } = response
		Toast.fail(`${errorText} | 请求错误 ${status}: ${url}`)
	}

	!response && Toast.info('您的网络发生异常，无法连接服务器')
}

//配置请求实例
const request_xyz = extend({
	errorHandler
})

// 对请求进行拦截加xyz进行加密 & 设置post请求头 & 序列化post参数
request_xyz.interceptors.request.use((url, options) => {
	const { method } = options
	if (method === 'post') {
		options.headers
			? (options.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8')
			: (options.headers = {
					'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
					// eslint-disable-next-line no-mixed-spaces-and-tabs
			  })

		options.data = qs.stringify(setXYZ(url, options.data))
	} else if (method === 'get') {
		options.params = setXYZ(url, options.params)
	}
	return {
		url,
		options
	}
})

//对返回值进行处理
request_xyz.use(
	async (ctx: Context, next) => {
		await next()
		const { res = {} } = ctx
		const { status } = res

		// 成功请求的数据这里统一做下处理
		if (status >= 200 && status < 300) {
			const resData = await res.clone().json()
			const { success, code, msg = '', value, data } = resData
			let _message = resData.message || msg
			let _code = code
			let _returnData = data // 默认取data，如果取value下面有判断

			// 取value值
			if (typeof value !== 'undefined') {
				// 某些value取值的返回结构中如 {success: true, value: 1}，没有code但是结果是成功的，无法完全用value去判断，这里针对value取值没有code的默认设置为1
				_code = typeof _code !== 'undefined' ? _code : value.code || 1
				_message = !_message ? value.message || value.msg : ''
				_returnData = typeof value.data !== 'undefined' ? value.data : value
			}

			let _data: ReturnResData = {
				success: false,
				result: null,
				message: _message || '出错了，请稍后再试'
			}
			if (_code === '000999' || _code === -999 || value === -999) {
				_data = {
					success: false,
					result: null,
					message: '登陆验证失败'
				}
				//跳转到登陆
				// window.location.href = memoryConfig.loginUrl
			} else if (
				success &&
				(_code === '000000' || _code === '1' || _code === 1 || _code === 0 || code === 2000)
			) {
				_data = {
					success: true,
					result: _returnData,
					message: ''
				}
			}

			if (!_data.success) {
				Toast.fail(_data.message, 3)
			}

			ctx.res = {
				data: _data
			}
		}
	},
	{ core: true }
)

export default request_xyz
