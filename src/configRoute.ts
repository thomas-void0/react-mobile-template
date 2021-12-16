import { lazy } from 'react'

const routes = [
	{
		path: '/',
		exact: true,
		component: lazy(() => import('@pages/Home'))
	},
	{
		path: '/adv',
		exact: true,
		component: lazy(() => import('@pages/Adv'))
	},
	{
		path: '/media',
		exact: true,
		component: lazy(() => import('@pages/Media'))
	}
]

export default routes
