// 走马灯第六页
import React, { FC } from 'react'
import PageLayout from '@components/PageLayout'
import styles from './index.module.less'
import classNames from 'classnames'
import useUserLoginStatus from '@common/hooks/useUserLoginStatus'
import bg from './img/bg.png'
import master from './img/master.png'

const Step6: FC<any> = () => {
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
					<p className={classNames(styles.title)}>新榜为你汇聚了来自五湖四海的新媒体玩家</p>
					<p className={classNames(styles.title, styles.fontBottom)}>
						今年与你合作的媒体主来自全国
						<span className={classNames(styles.fontWeight)}>16个</span>省份
					</p>

					<p className={classNames(styles.title)}>
						你至少为
						<span className={classNames(styles.fontWeight)}>32个</span>
						机构
					</p>
					<p className={classNames(styles.title)}>
						<span className={classNames(styles.fontWeight)}>632个</span>
						个人新媒体从业带来了收入
					</p>
					<p className={classNames(styles.title)}>你真的很了不起</p>
				</div>
			</div>
		</PageLayout>
	)
}

export default Step6
