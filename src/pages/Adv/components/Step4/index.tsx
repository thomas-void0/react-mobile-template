// 走马灯第四页
import React, { FC } from 'react'
import PageLayout from '@components/PageLayout'
import styles from './index.module.less'
import classNames from 'classnames'
import useUserLoginStatus from '@common/hooks/useUserLoginStatus'
import bg from './img/bg.png'
import master from './img/master.png'

const Step4: FC<any> = () => {
	const userInfo = useUserLoginStatus()
	console.log('userInfo', userInfo)

	return (
		<PageLayout bg={bg} visibleUp={false}>
			<div className={styles.wrap}>
				<div className={styles.masterBox}>
					<div className={styles.master}>
						<img src={master} alt="" />
					</div>
				</div>

				<div className={styles.textBox}>
					<p className={classNames(styles.title, styles.fontWeight)}>
						由于新榜有赚按预估阅读封顶结算的规则
					</p>
					<div className={classNames(styles.title)}>2021年，你在自媒宝与互选宝</div>
					<div className={classNames(styles.title, styles.fontBottom)}>
						共计免费获得
						<span className={classNames(styles.fontHigh, styles.fontWeight)}>56个</span>
						阅读
					</div>

					<div className={classNames(styles.title)}>
						涉及
						<span className={styles.fontWeight}>14个</span>
						正常订单
					</div>

					<p className={classNames(styles.title)}>
						约为你省下
						<span className={styles.fontWeight}>579.23元</span>
						投放成本
					</p>
				</div>
			</div>
		</PageLayout>
	)
}

export default Step4
