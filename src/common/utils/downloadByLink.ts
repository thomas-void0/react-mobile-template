/**
 * @description  创建a链接下载文件
 * @param src 下载链接
 */
export default function downloadByLink(src: string): void {
	const link = document.createElement('a')
	link.style.display = 'none'
	link.href = src
	document.body.appendChild(link)
	link.click()
	document.body.removeChild(link)
}
