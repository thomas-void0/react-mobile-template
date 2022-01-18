import React, { FC } from 'react'
import styles from './index.module.less'

const NoMatch: FC<any> = () => {
	return <div className={styles['container']}>404</div>
}

export default NoMatch
