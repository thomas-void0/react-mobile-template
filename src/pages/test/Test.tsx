import React, { ReactElement } from 'react'
import './test.less'
import { Button } from 'antd'

export default function Test(): ReactElement {
	const handleClick = (): void => {
		console.log('runrun')
	}
	const a = 1
	return (
		<div className="box">
			啊啊啊啊啊啊
			<Button onClick={() => handleClick()} type="primary">
				测试按钮
			</Button>
			<Button type="primary">收拾收拾</Button>
		</div>
	)
}
