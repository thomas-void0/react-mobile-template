import React, { ReactElement } from 'react'
import styles from './index.module.less'
import { useRequest } from 'ahooks'

const ToPromote = (): ReactElement => {
	const getUesrName = (): Promise<string> => {
		return new Promise(resolve => {
			setTimeout(() => {
				resolve('qwwww')
			}, 3000)
		})
	}
	const { data, error, loading } = useRequest(getUesrName)
	console.log(loading)
	return (
		<div className={styles.box}>
			<div>推广界面</div>
			<div>{error}</div>
			<div>{loading ? 'loading' : data}</div>
		</div>
	)
}

export default ToPromote
