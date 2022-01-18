/**
 * @description 格式化金额
 * @param number 要格式化的数字
 * @param precision 保留几位小数
 * @param decPoint 小数点符号
 * @param thousandsSep 千分位符号
 */
export default function formatMoney(
	number: number,
	precision: number = 2,
	decPoint: string = '.',
	thousandsSep: string = ','
) {
	const toFixedFix = (n: number, prec: number): string => {
		const k = 10 ** prec
		return String(Math.ceil(n * k) / k)
	}
	const num = String(number).replace(/[^0-9+-Ee.]/g, '')
	const n = !Number.isFinite(+num) ? 0 : +num
	const prec = !Number.isFinite(+precision) ? 0 : Math.abs(precision)
	const sep = typeof thousandsSep === 'undefined' ? ',' : thousandsSep
	const dec = typeof decPoint === 'undefined' ? '.' : decPoint
	let s: string[] = []
	s = (prec ? toFixedFix(n, prec) : String(Math.round(n))).split('.')
	const re = /(-?\d+)(\d{3})/
	while (re.test(s[0])) {
		s[0] = s[0].replace(re, `$1${sep}$2`)
	}
	if ((s[1] || '').length < prec) {
		s[1] = s[1] || ''
		s[1] += new Array(prec - s[1].length + 1).join('0')
	}
	return s.join(dec)
}
