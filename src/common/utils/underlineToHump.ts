/**
 * @description 连字符转驼峰
 * @param str
 */
export default function underlineToHump(str: string) {
	return str.replace(/_(\w)/g, (all, letter) => {
		return letter.toUpperCase()
	})
}
