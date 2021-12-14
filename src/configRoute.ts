import { lazy } from 'react'

const routes = [
	{
		path: '/',
		exact: true,
		component: lazy(() => import('@pages/TestDemo'))
	}
]

export default routes
