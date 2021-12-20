import React, { FC } from 'react'
import identityBg from '../../img/identity-bg.png'
import nIcon from '../../img/n.png'
import PageLayout from '@components/PageLayout'
import styles from './index.module.less'
import { useHistory } from 'react-router'
import { Button } from 'antd-mobile'

const Identity: FC<any> = () => {
	const { push } = useHistory()

	const handleGoAdv = () => {
		push && push('/adv')
	}

	return (
		<PageLayout customClass={styles.container} userType="media" bg={identityBg} visibleUp={false}>
			<img className={styles.topImg} src={nIcon} />

			<div className={styles.content}>
				您的身份信息为<span>广告主</span> <br />
				无法查看 流量主年度回顾报告，点击查看
			</div>

			<Button onClick={handleGoAdv} className={styles.btn}>
				广告主年度回顾
			</Button>
		</PageLayout>
	)
}

export default Identity
