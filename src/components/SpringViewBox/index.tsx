// 动画盒子，当元素可见的时候，执行动画操作
import React, { FC, useRef } from 'react'
import { useSpring, animated, config as _config } from '@react-spring/web'
import { useInViewport, useUpdateEffect } from 'ahooks'

interface IProps {
	/* 开始进入的样式 */
	from: Record<string, any>
	/* 最终的样式 */
	to: Record<string, any>
	/* 物理效果配置 */
	config?: typeof _config
	/* 其他配置 */
	[key: string]: any
}

const SpringViewBox: FC<IProps> = props => {
	const { from, to, config = _config.gentle, children, ...rest } = props

	const domRef = useRef(null)

	const isView = useInViewport(domRef)

	const [_styles, api] = useSpring(() => ({ from, config }))

	useUpdateEffect(() => {
		isView && api.start({ to })
	}, [isView])

	return (
		<animated.div {...rest} style={_styles} ref={domRef}>
			{children}
		</animated.div>
	)
}

export default SpringViewBox
