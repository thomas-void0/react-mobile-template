import requestXYZ from '../../utils/requestConfig'
import { ApiResData } from '../types/reqCommon'
import { UserInfo } from '../types/toPromote'
// 获取用户信息
export async function getUser() {
	return requestXYZ.get<ApiResData<UserInfo>>('/xdnphb/admin/login/get')
}
