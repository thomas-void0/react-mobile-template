import { recoil, USER_INFO } from '@src/recoil/userInfo'

// 获取用户登录状态
const useUserLoginStatus = () => {
	const state = recoil.useRecoilValue(USER_INFO)

	console.log('state', state)

	return {}
}

export default useUserLoginStatus
