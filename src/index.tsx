import * as ReactDOM from 'react-dom'
import React, { Suspense } from 'react'
import App from './App'
import { RecoilRoot } from 'recoil'
import { BrowserRouter } from 'react-router-dom'
import Loading from '@/components/Loading'

ReactDOM.render(
	<RecoilRoot>
		<BrowserRouter>
			<Suspense fallback={<Loading />}>
				<App />
			</Suspense>
		</BrowserRouter>
	</RecoilRoot>,
	document.getElementById('root')
)
