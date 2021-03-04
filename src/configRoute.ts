import Appect from '@pages/Appect'
import ToPromote from '@pages/ToPromote'
import Husa from '@pages/ToPromote/components/Husa'

const routes = [
	{
		path: '/accept',
		component: Appect,
		routes: [
			{
				path: '/accept/husa',
				component: Husa
			}
		]
	},
	{
		path: '/toPromote',
		component: ToPromote
	}
]

export default routes
