/* eslint-disable no-undef */
import React, { ReactElement } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import '@/assets/styles/normalize.less'

const App = (): ReactElement => {
	const el = useRoutes(routes)
	return <div>{el}</div>
}

export default App
