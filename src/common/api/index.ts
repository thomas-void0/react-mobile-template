import ordinaryRequest from '../request/ordinaryRequest'
import { IResData } from '@/typings/api'

// 获取用户信息
export const getUser = () => {
	const url = `/xdnphb/common/account/get`
	return ordinaryRequest.get<IResData<any>>(url)
}
