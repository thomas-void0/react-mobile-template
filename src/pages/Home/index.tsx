// 开始页面
import React, { FC } from 'react'
import { renderRoutes } from 'react-router-config'

const Home: FC<any> = ({ route }) => {
	return (
		<div>
			<h1>哈哈哈哈</h1>
			<div>{renderRoutes(route.routes)}</div>
		</div>
	)
}

export default Home
