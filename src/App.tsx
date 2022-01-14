/* eslint-disable no-undef */
import React, { ReactElement } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import '@/assets/styles/normalize.less'

// 在非微信环境不能打开
const App = (): ReactElement => {
	const el = useRoutes(routes)
	return <div>{el}</div>
}

export default App
