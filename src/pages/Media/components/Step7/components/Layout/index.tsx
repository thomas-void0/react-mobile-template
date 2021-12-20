// 走马灯第七页
import React, { FC } from 'react'
import styles from './index.module.less'
import bubble from '../../img/bubble.png'

const Layout: FC<any> = props => {
	const { children } = props

	return (
		<div className={styles.container}>
			<div className={styles.head}>
				<img src={bubble} alt="" />
			</div>
			<div className={styles.content}>{children}</div>
		</div>
	)
}

export default Layout
