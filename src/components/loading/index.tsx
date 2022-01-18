import React, { ReactElement } from 'react'
import styles from './index.module.less'
import { DotLoading } from 'antd-mobile'

// loading
const Loading = (): ReactElement => {
	return (
		<div className={styles['loading-container']}>
			<DotLoading color="primary" />
		</div>
	)
}

export default Loading
