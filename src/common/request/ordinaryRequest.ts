//用于默认方式的请求,比如一些不走gateWay的接口
import axios from 'axios'
import setEncryption from './setEncryption'
import { responseCallBack, errorCallback } from './interceptCallback'
import qs from 'qs'

//创建实例
const instance = axios.create({
	transformRequest: [(data: unknown) => qs.stringify(data)],
	headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
	withCredentials: true
})

instance.interceptors.request.use(config => {
	const { url, data, method, params } = config
	if (!url) {
		return config
	}
	if (method === 'get') {
		config.params = setEncryption(url, params)
	} else if (method === 'post') {
		//常规post加密
		config.data = setEncryption(url, data)
	}

	return config
})

instance.interceptors.response.use(responseCallBack, errorCallback)

export default instance
