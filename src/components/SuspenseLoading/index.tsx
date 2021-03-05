import React, { ReactElement } from 'react'
import { Icon } from 'antd-mobile'

//路由懒加载占位符组件
const SuspenseLoading = (): ReactElement => {
	return (
		<div>
			<Icon type="loading" />
		</div>
	)
}

export default SuspenseLoading
