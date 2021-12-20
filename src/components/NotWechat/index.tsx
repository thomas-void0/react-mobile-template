// 非微信环境提示
import React, { FC } from 'react'
import styles from './index.module.less'
import { Button, Toast } from 'antd-mobile'
import copy from '@common/utils/copy'

const NotWechat: FC<any> = () => {
	const handleCopy = () => {
		const link = window.location.href
		copy(link) ? Toast.success('复制成功') : Toast.success('复制失败')
	}

	return (
		<div className={styles.container}>
			<div>
				<p>请在微信环境中，打开此链接</p>
				<Button className={styles.btn} onClick={handleCopy}>
					复制链接
				</Button>
			</div>
		</div>
	)
}

export default NotWechat
