import React, { ReactElement } from 'react'
import { useHistory } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

interface IProps {
	route: any
}

const Appect = (props: IProps): ReactElement => {
	const history = useHistory()
	const handleClick = (): void => {
		history.push('/accept/husa')
	}
	const { route } = props

	return (
		<div>
			<div>appect</div>
			<button onClick={handleClick}>2222</button>
			{renderRoutes(route.routes)}
		</div>
	)
}

export default Appect
