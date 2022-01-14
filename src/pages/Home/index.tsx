// 开始页面
import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import styles from './index.module.less'

const Home: FC<any> = () => {
	return (
		<div className={styles['home-container']}>
			<h1>hello react</h1>
			<Outlet />
		</div>
	)
}

export default Home
