/* eslint-disable no-undef */
//document.title的配置
export const DOCUMENT_TITLE_LIST = []

const envKey = process.env.NODE_ENV as keyof IEnv

//阿里云OSS配置key
export interface IEnv {
	development: string
	none: string
	production: string
}
export const OSS_KEY: IEnv = {
	development: 'v881282c9b7d94535b6411b7g',
	none: 'v881282c9b7d94535b6411b7g',
	production: 'v0b18c2e979684830bd8ffdme'
}
export const ossKey = OSS_KEY[envKey]

//不同环境的登陆链接
const LOGIN_URL: IEnv = {
	development:
		'http://dev.main.newrank.cn/user/ade/login/m?type=104&source=20&scene=youzhuan_login',
	none: 'http://test.main.newrank.cn/user/ade/login/m?type=104&source=20&scene=youzhuan_login',
	production: 'https://www.newrank.cn/user/ade/login/m?type=4&source=20&scene=youzhuan_login'
}
export const loginUrl = LOGIN_URL[envKey]

const ADE_URL = {
	development: 'http://test.a.newrank.cn',
	none: 'http://test.a.newrank.cn',
	production: 'https://a.newrank.cn'
}

export const adeUrl = ADE_URL[envKey]

//任务宝请求基础地址
export const baseUrl =
	process.env.NODE_ENV !== 'production'
		? 'http://test-gw.newrank.cn:18080/api/taskset/taskset'
		: 'https://gw.newrank.cn/api/taskset/taskset'
