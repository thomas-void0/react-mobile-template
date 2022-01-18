import { round } from 'lodash-es'
/**
 * @description 将数字转换为带单位的格式
 * @param n 数字
 * @param precision 保留的数字的精度
 */
export default function numberUnit(n: string | number, precision: number = 2) {
	const ONE_HUNDRED_MILLION = 1e8
	const TEN_THOUSAND = 1e4
	if (typeof n === 'string' && !/^-?\d+$/.test(n)) {
		return n
	}
	const num = Number(n)

	// 大于一亿
	if (num >= ONE_HUNDRED_MILLION) {
		return `${parseFloat(String(round(num / ONE_HUNDRED_MILLION, precision)))}亿`
	}

	// 大于1万
	if (num >= TEN_THOUSAND) {
		return `${parseFloat(String(round(num / TEN_THOUSAND, precision)))}w`
	}

	// 小于一亿
	if (num <= -ONE_HUNDRED_MILLION) {
		return `${parseFloat(String(round(num / ONE_HUNDRED_MILLION, precision)))}亿`
	}

	// 小于1万
	if (num <= -TEN_THOUSAND) {
		return `${parseFloat(String(round(num / TEN_THOUSAND, precision)))}w`
	}
	return String(num)
}
