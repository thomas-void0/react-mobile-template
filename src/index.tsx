import * as ReactDOM from 'react-dom'
import React, { Suspense } from 'react'
import App from './App'
import { RecoilRoot } from 'recoil'
import { BrowserRouter } from 'react-router-dom'
import Loading from '@/components/Loading'
import ErrorBoundary from '@/components/ErrorBoundary'

ReactDOM.render(
	<RecoilRoot>
		<ErrorBoundary>
			<BrowserRouter>
				<Suspense fallback={<Loading />}>
					<App />
				</Suspense>
			</BrowserRouter>
		</ErrorBoundary>
	</RecoilRoot>,
	document.getElementById('root')
)
