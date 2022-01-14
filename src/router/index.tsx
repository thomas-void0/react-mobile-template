import React from 'react'
import type { RouteObject } from 'react-router-dom'
import Home from '@/pages/Home'
import Page1 from '@/pages/Page1'
import Page2 from '@/pages/Page2'

const routes: RouteObject[] = [
	{
		path: '/',
		element: <Home />,
		children: [
			{ path: '/husa', element: <Page1 /> },
			{
				path: '/adv',
				element: <Page2 />
			}
		]
	}
]

export default routes
