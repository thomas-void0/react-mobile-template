// 普通用户内容
import React, { FC } from 'react'
import styles from './index.module.less'
import Layout from '../Layout'

const Content: FC<any> = () => {
	return (
		<Layout>
			<div className={styles.wrap}>
				<ul></ul>
			</div>
		</Layout>
	)
}

export default Content
