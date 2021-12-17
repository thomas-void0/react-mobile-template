// 判断是否为微信环境
export default function isWeChat() {
	return /MicroMessenger/i.test(window.navigator.userAgent)
}
