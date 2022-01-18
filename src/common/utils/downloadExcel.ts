import { forOwn } from 'lodash-es'
/**
 * @description 下载Excel
 * @param action url
 * @param data 参数
 * @param method 请求方式
 */
type RequsetType = 'get' | 'post' | 'delete'
export default function downloadExcel(action: string, data: any, method: RequsetType = 'post') {
	const form = document.createElement('form') // 定义一个form表单
	form.style.display = 'none' // 在form表单中添加查询参数
	form.setAttribute('target', '')
	form.setAttribute('method', method)
	form.setAttribute('action', action)
	forOwn(data, (value, key) => {
		const input1 = document.createElement('input')
		input1.setAttribute('type', 'hidden')
		input1.setAttribute('name', key)
		input1.setAttribute('value', value)
		form.appendChild(input1) // 将查询参数控件提交到表单上
	})
	document.body.appendChild(form) // 将表单放置在web中
	form.submit() // 表单提交
	document.body.removeChild(form)
}
