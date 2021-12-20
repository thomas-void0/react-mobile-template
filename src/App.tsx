/* eslint-disable no-undef */
import React, { ReactElement, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from './configRoute'
import Loading from '@src/components/Loading'
import '@assets/styles/normalize.less'
// import isWeChat from '@common/utils/isWechat'
import NotWechat from '@components/NotWechat'
import { RecoilRoot } from 'recoil'

// 在非微信环境不能打开
const App = (): ReactElement => {
	let flat = true
	return (
		<RecoilRoot>
			{flat ? (
				<BrowserRouter>
					<Suspense fallback={<Loading />}>{renderRoutes(routes)}</Suspense>
				</BrowserRouter>
			) : (
				<NotWechat />
			)}
		</RecoilRoot>
	)
}

export default App
