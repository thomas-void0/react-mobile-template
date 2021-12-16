import React, { ReactElement } from 'react'
import { ActivityIndicator } from 'antd-mobile'

//路由懒加载占位符组件
const Loading = (): ReactElement => {
	return <ActivityIndicator animating />
}

export default Loading
