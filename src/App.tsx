import React, { ReactElement } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from './configRoute'
import Test from './pages/Test'

const App = (): ReactElement => {
	return (
		<BrowserRouter>
			<Test />
			{renderRoutes(routes)}
		</BrowserRouter>
	)
}

export default App
