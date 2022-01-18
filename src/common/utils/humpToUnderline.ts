/**
 * @description 驼峰转连字符
 * @param str
 */
export default function humpToUnderline(str: string) {
	return str
		.replace(/([A-Z])/g, '_$1')
		.toLowerCase()
		.replace(/([0-9])/, '_$1')
		.toLowerCase()
}
