//用于gateWay方式的请求
import axios from 'axios'
import setEncryption from './setEncryption'
import { baseUrl } from '../config'
import isGetWayUrl from './isGetWayUrl'
import { responseCallBack, errorCallback } from './interceptCallback'

//创建实例
const instance = axios.create({
	transformRequest: [(data: unknown) => JSON.stringify(data)],
	headers: {
		'Content-Type': 'application/json;charset=UTF-8',
		'N-Token': '1dbec3bff6544a1da10753de1bcd7a5b'
	},
	withCredentials: true
})

instance.interceptors.request.use(config => {
	const { url, data, method, params } = config
	if (!url) {
		return config
	}
	//判断是否为gateway地址
	if (!isGetWayUrl(url)) {
		throw new Error(`${url}不是gateWay接口，请不要调用此请求实例。`)
	}
	const urlList = url.split(baseUrl)
	const encryptionUrl = urlList[urlList.length - 1]

	if (method === 'get') {
		config.params = setEncryption(encryptionUrl, params)
	} else if (method === 'post') {
		const _data = setEncryption(encryptionUrl, data, true) // 加密参数
		config.url = `${url}?xyz=${_data.xyz}&nonce=${_data.nonce}`
	}

	return config
})

instance.interceptors.response.use(responseCallBack, errorCallback)

export default instance
