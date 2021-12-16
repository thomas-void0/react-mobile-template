// 页面布局
import React, { FC } from 'react'
import styles from './index.module.less'
import { Icon } from 'antd-mobile'
import SpringViewBox from '../SpringViewBox'

interface IProps {
	/** 背景图片 */
	bg: string
	/** 是否显示和隐藏footer 默认 true */
	visibleFooter?: boolean
	/** 是否显示和隐藏向上滑动，默认 true */
	visibleUp?: boolean
}

const PageLayout: FC<IProps> = props => {
	const { children, bg = '', visibleFooter = true, visibleUp = true } = props

	return (
		<div className={styles.pageLayout} style={{ backgroundImage: `url(${bg})` }}>
			<div className={styles.musicIcon}>icon</div>
			<div className={styles.container}>
				<div className={styles.content}>{children}</div>
				{visibleUp && (
					<SpringViewBox
						from={{ transform: 'translateY(0px)', opacity: 0 }}
						to={{ transform: 'translateY(-40px)', opacity: 1 }}
						className={styles.up}
					>
						<Icon type="up" />
						<li>上滑查看更多</li>
					</SpringViewBox>
				)}
			</div>
			{visibleFooter && <div className={styles.footer}>footer</div>}
		</div>
	)
}

export default PageLayout
