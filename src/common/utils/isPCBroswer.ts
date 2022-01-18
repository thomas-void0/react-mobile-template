/**
 * 是否PC端浏览器模式
 */
const isPCBroswer = () => {
	const userAgentInfo = navigator.userAgent
	const Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
	let flag = true
	for (let i = 0; i < Agents.length; i++) {
		if (userAgentInfo.indexOf(Agents[i]) > 0) {
			flag = false
			break
		}
	}
	return flag
}

export default isPCBroswer
