import React, { ReactElement, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from './configRoute'
import Test from './pages/Test'
import SuspenseLoading from '@components/SuspenseLoading'

const App = (): ReactElement => {
	return (
		<BrowserRouter>
			{/* 使用占位符，进行路由懒加载 */}
			<Suspense fallback={<SuspenseLoading />}>
				<Test />
				{renderRoutes(routes)}
			</Suspense>
		</BrowserRouter>
	)
}

export default App
