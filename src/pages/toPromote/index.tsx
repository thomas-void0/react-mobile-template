import React, { ReactElement } from 'react'
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
	return (
		<div>
			<div>推广界面</div>
			<div>{error}</div>
			<div>{loading ? 'loading' : data}</div>
		</div>
	)
}

export default ToPromote
