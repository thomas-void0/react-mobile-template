import React, { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'
const Home = lazy(() => import('@/pages/Home'))
const Page1 = lazy(() => import('@/pages/Page1'))
const Page2 = lazy(() => import('@/pages/Page2'))
const NoMatch = lazy(() => import('@/components/NoMatch'))

const routes: RouteObject[] = [
	{
		path: '/',
		element: <Home />,
		children: [
			{
				path: '/page1',
				element: <Page1 />
			},
			{
				path: '/page2',
				element: <Page2 />
			}
		]
	},
	{
		path: '*',
		element: <NoMatch />
	}
]

export default routes
