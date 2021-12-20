// 走马灯第三页
import React, { FC } from 'react'
import PageLayout from '@components/PageLayout'
import styles from './index.module.less'
import classNames from 'classnames'
import useUserLoginStatus from '@common/hooks/useUserLoginStatus'
import bg from './img/bg.png'
import master from './img/master.png'

const Step3: FC<any> = () => {
	const userInfo = useUserLoginStatus()
	console.log('userInfo', userInfo)

	return (
		<PageLayout bg={bg} visibleUp={false}>
			<div className={styles.wrap}>
				<div className={styles.textBox}>
					<p className={classNames(styles.title, styles.fontBottom)}>2021年</p>
					<div className={styles.title}>
						你在新榜建过
						<span className={classNames(styles.fontHigh, styles.fontWeight)}>56个</span>
						推广项目
					</div>
					<div className={classNames(styles.title)}>
						成交
						<span className={styles.fontWeight}>63个</span>
						订单，共消耗
						<span className={styles.fontWeight}>6.3w</span>元
					</div>

					<p className={classNames(styles.title, styles.fontMiddle)}>
						在自媒宝、互选宝获得
						<span className={styles.fontWeight}>36.23w个</span>
						阅读数
					</p>
					<p className={styles.title}>不是有希望才坚持</p>
					<p className={styles.title}>而是坚持才有希望</p>
				</div>

				<div className={styles.masterBox}>
					<div className={styles.master}>
						<img src={master} alt="" />
					</div>
				</div>
			</div>
		</PageLayout>
	)
}

export default Step3
