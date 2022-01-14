// 开始页面
import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'

const Home: FC<any> = () => {
	return (
		<div>
			<h1>哈哈哈哈</h1>
			<Outlet />
		</div>
	)
}

export default Home
