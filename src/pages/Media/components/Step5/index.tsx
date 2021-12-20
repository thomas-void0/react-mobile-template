// 走马灯第五页
import React, { FC } from 'react'
import PageLayout from '@components/PageLayout'
import styles from './index.module.less'
import classNames from 'classnames'
import useUserLoginStatus from '@common/hooks/useUserLoginStatus'
import bg from './img/bg.png'
import master from './img/master.png'

const Step5: FC<any> = () => {
	const userInfo = useUserLoginStatus()
	console.log('userInfo', userInfo)

	return (
		<PageLayout bg={bg} userType="media">
			<div className={styles.wrap}>
				<div className={styles.textBox}>
					<p className={classNames(styles.title)}>2021年</p>
					<p className={classNames(styles.title)}>在公众号投放业务中</p>
					<p className={classNames(styles.title)}>
						我们累计为你去除了
						<span className={classNames(styles.fontHigh, styles.fontWeight)}>1789个</span>无效阅读
					</p>
					<div className={classNames(styles.title, styles.fontBottom)}>
						共涉及
						<span className={classNames(styles.fontWeight)}>63个</span>
						订单
					</div>

					<p className={classNames(styles.title)}>去粗取精，去伪存真</p>
					<p className={classNames(styles.title)}>做不到的事情我们不会承诺</p>
					<p className={classNames(styles.title)}>承诺过的事情我们绝不含糊</p>
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

export default Step5
