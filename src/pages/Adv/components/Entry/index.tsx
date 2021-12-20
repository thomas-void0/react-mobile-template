// 入口
import React, { FC } from 'react'
import PageLayout from '@components/PageLayout'
import { Flex } from 'antd-mobile'
import useUserLoginStatus from '@common/hooks/useUserLoginStatus'
import styles from './index.module.less'
import classNames from 'classnames'
import bg from '../../img/entry.png'
import master from './img/master.png'
import title from './img/2021_title.png'
import advTitle from './img/adv_title.png'
import btnText from './img/btn_text.png'
import newrankLogo from './img/newrank_logo.png'

const AdvHome: FC<any> = () => {
	const userInfo = useUserLoginStatus()
	console.log('userInfo', userInfo)

	return (
		<PageLayout bg={bg} visibleUp={false} visibleFooter={false}>
			<div className={styles.wrap}>
				<div className={styles.head}>
					<img src={master} alt="" />
				</div>
				<div className={classNames(styles.main)}>
					<Flex direction="column">
						<Flex.Item>
							<p className={styles.title}>
								<img src={title} />
							</p>
						</Flex.Item>
						<Flex.Item>
							<p className={styles.advTitle}>
								<img src={advTitle} />
							</p>
						</Flex.Item>
						<Flex.Item>
							<p className={styles.desc}>· 新榜有赚广告主 ·</p>
						</Flex.Item>
						<Flex.Item>
							<div className={classNames(styles.btn, styles.flexCenter)}>
								<img src={btnText} alt="新榜有赚" />
							</div>
						</Flex.Item>
					</Flex>
				</div>
				<div className={classNames(styles.footer, styles.flexCenter)}>
					<img src={newrankLogo} alt="新榜有赚" />
				</div>
			</div>
		</PageLayout>
	)
}

export default AdvHome
