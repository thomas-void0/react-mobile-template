import * as ReactDOM from 'react-dom'
import React, { Suspense } from 'react'
import App from './App'
import { RecoilRoot } from 'recoil'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
	<RecoilRoot>
		<BrowserRouter>
			<Suspense fallback={<div>loading</div>}>
				<App />
			</Suspense>
		</BrowserRouter>
	</RecoilRoot>,
	document.getElementById('root')
)
