// 页面布局
import React, { FC } from 'react'
import styles from './index.module.less'
import { Icon } from 'antd-mobile'
import SpringViewBox from '../SpringViewBox'
import musicIcon from './img/music.png'
import mediaFooter from './img/media-footer.png'
import advFooter from './img/adv-footer.png'
import classNames from 'classnames'

interface IProps {
	/** 背景图片 */
	bg?: string
	/** 是否显示和隐藏footer 默认 true */
	visibleFooter?: boolean
	/** 是否显示和隐藏向上滑动，默认 true */
	visibleUp?: boolean
	/* 底部背景图 */
	fbg?: string
	/* 媒体还是广告主 */
	userType?: 'adv' | 'media'
	/* 自定义容器样式 */
	customClass?: string
}

const PageLayout: FC<IProps> = props => {
	const {
		children,
		bg = '',
		visibleFooter = true,
		visibleUp = true,
		userType = 'adv',
		customClass = ''
	} = props

	const comFooterImg = userType === ('adv' as const) ? advFooter : mediaFooter

	return (
		<div
			className={classNames(styles.pageLayout, customClass)}
			style={{ backgroundImage: `url(${bg})` }}
		>
			<div className={styles.musicIcon}>
				<img src={musicIcon} />
			</div>
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
			{visibleFooter && (
				<div className={styles.footer}>
					<img src={comFooterImg} />
				</div>
			)}
		</div>
	)
}

export default PageLayout
