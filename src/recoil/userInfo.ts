import { atom, selector } from 'recoil'
import { getUser } from '@common/api'

export * as recoil from 'recoil'

export const USER_INFO = atom({
	key: 'USER_INFO',
	default: selector({
		key: 'USER_INFO_SELECTOR',
		get: async () => {
			let res: any = null
			console.log(res)
			try {
				res = await getUser()
			} catch (error) {
				console.log('error')
			} finally {
				// eslint-disable-next-line no-unsafe-finally
				return res
			}
		}
	})
})
