import { atom, selector } from 'recoil'
import { getUser } from '@/common/api'

export * as recoil from 'recoil'

export const USER_INFO = atom({
	key: 'USER_INFO',
	default: selector({
		key: 'USER_INFO_SELECTOR',
		get: async () => {
			const initValue: Record<string, any> = {}
			try {
				const res = await getUser()
				const { data, success } = res
				if (success && data) return data
			} catch (error) {
				return initValue
			}
		}
	})
})
