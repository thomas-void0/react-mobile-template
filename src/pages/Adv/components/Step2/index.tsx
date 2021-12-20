// 走马灯第二页
import React, { FC } from 'react'
import PageLayout from '@components/PageLayout'
import styles from './index.module.less'
import classNames from 'classnames'
import useUserLoginStatus from '@common/hooks/useUserLoginStatus'
import bg from './img/bg.png'
import master from './img/master.png'

const Step2: FC<any> = () => {
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
				<p className={styles.title}>还记得吗</p>
				<div className={styles.title}>
					<span className={styles.fontWeight}>2018年1月1日</span>
					你入驻新榜
				</div>
				<div className={classNames(styles.title, styles.fontMiddle)}>
					<span className={styles.fontWeight}>15天</span>后 创建了第一个投放项目
				</div>

				<p className={styles.title}>建立信任有时很漫长</p>
				<p className={styles.title}>有时只是一瞬间</p>
			</div>
		</PageLayout>
	)
}

export default Step2
