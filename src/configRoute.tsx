import React from 'react'
import type { RouteObject } from 'react-router-dom'
import Home from '@pages/Home'
import Husa from '@pages/Husa'
import Adv from '@pages/Adv'
import Media from '@pages/Media'

const routes: RouteObject[] = [
	{
		path: '/',
		element: <Home />,
		children: [
			{ path: '/husa', element: <Husa /> },
			{
				path: '/adv',
				element: <Adv />
			},
			{
				path: '/media',
				element: <Media />
			}
		]
	}
]

export default routes
