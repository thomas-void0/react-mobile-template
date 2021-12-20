import ordinaryRequest from '../request/ordinaryRequest'

// 获取用户信息
export const getUser = () => {
	const url = `/xdnphb/common/account/get`
	return ordinaryRequest.get<any>(url)
}
