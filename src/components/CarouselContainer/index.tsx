// 走马灯容器
import React, { FC } from 'react'
import { Carousel } from 'antd-mobile'
import styles from './index.module.less'

interface IProps {
	content: any[]
}

const CarouselContainer: FC<IProps> = props => {
	const { content } = props

	return (
		<Carousel className={styles.carouselContainer} vertical autoplay={false} dots={false}>
			{content.map((item, index) => (
				<div style={{ height: '100vh' }} key={index}>
					{item}
				</div>
			))}
		</Carousel>
	)
}

export default CarouselContainer
