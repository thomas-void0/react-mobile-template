/**
 * 是否属于gateWay地址
 * @param {string} url gateWay地址
 * @returns boolean
 */
const isGetWayUrl = (url: string): boolean =>
	url.startsWith('http') || (url.startsWith('https') && url.includes('gw.newrank.cn'))

export default isGetWayUrl
