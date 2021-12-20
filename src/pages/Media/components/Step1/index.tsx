import React, { FC } from 'react'
import step1Bg from '../../img/step1-bg.png'
import styles from './index.module.less'
import nIcon from '../../img/n.png'
import PageLayout from '@components/PageLayout'

const Stpe1: FC<any> = () => {
	return (
		<PageLayout customClass={styles.container} userType="media" bg={step1Bg}>
			<img className={styles.topImg} src={nIcon} />

			<div className={styles.content}>
				<div>新榜有赚</div>
				<div>有幸在2021年</div>
				<div>真实地参与过</div>
				<div>你的工作与生活</div>
			</div>
		</PageLayout>
	)
}

export default Stpe1
