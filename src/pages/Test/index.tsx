import React from 'react'
import { Button } from 'antd-mobile'
import { useHistory } from 'react-router-dom'

export default function index() {
	const history = useHistory()
	return (
		<div>
			<Button
				type="primary"
				style={{ height: '60px' }}
				onClick={() => history.push('/accept')}
			>
				accept
			</Button>
			<Button
				type="primary"
				style={{ height: '60px', marginTop: '30px' }}
				onClick={() => history.push('/toPromote')}
			>
				toPromote
			</Button>
		</div>
	)
}
