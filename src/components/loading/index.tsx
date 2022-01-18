import React, { ReactElement } from 'react'
import styles from './index.module.less'

// loading
const Loading = (): ReactElement => {
	return <div className={styles['loading-container']}>loading...</div>
}

export default Loading
