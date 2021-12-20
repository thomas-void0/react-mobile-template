// 入口界面
import React, { FC } from 'react'
import PageLayout from '@components/PageLayout'
import entryBg from '../../img/entry.png'
import entryIcon from '../../img/entry-icon.png'
import titleIcon from '../../img/title.png'
import secondTitleIcon from '../../img/second-title.png'
import threeTitleIcon from '../../img/three-title.png'
import logo from '../../img/logo.png'
import { Button } from 'antd-mobile'
import styles from './index.module.less'

interface IProps {
	onCallback: () => void
}
const Entry: FC<IProps> = ({ onCallback }) => {
	return (
		<PageLayout customClass={styles.container} bg={entryBg} visibleUp={false} visibleFooter={false}>
			<img src={entryIcon} />

			<div>
				<img className={styles.title} src={titleIcon} />
				<img className={styles.secondTitle} src={secondTitleIcon} />
				<img className={styles.threeTitle} src={threeTitleIcon} />
				<Button onClick={onCallback} className={styles.btn}>
					开始回顾
				</Button>
			</div>

			<img className={styles.logo} src={logo} />
		</PageLayout>
	)
}

export default Entry
