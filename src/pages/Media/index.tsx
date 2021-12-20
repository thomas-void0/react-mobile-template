// 流量主
import React, { useState } from 'react'
import useUserLoginStatus from '@common/hooks/useUserLoginStatus'
import CarouselContainer from '@components/CarouselContainer'
import Entry from './components/Entry'
import Identity from './components/Identity'
import Step1 from './components/Step1'
import Step2 from './components/Step2'
import Step3 from './components/Step3'
import Step4 from './components/Step4'
import Step5 from './components/Step5'
import Step6 from './components/Step6'
import Step7 from './components/Step7'

const Media: React.FC<any> = () => {
	const userInfo = useUserLoginStatus()
	// 渲染不同卡片
	const [renderStatus, setRenderStatus] = useState<'entry' | 'identity' | 'carousel'>('carousel')

	const onReviewCallback = () => {
		// 判断用户身份是否正确
		setRenderStatus('identity')
	}

	return (
		<>
			{renderStatus === 'entry' && <Entry onCallback={onReviewCallback} />}
			{renderStatus === 'identity' && <Identity />}
			{renderStatus === 'carousel' && (
				<CarouselContainer
					content={[<Step1 />, <Step2 />, <Step3 />, <Step4 />, <Step5 />, <Step6 />, <Step7 />]}
				/>
			)}
		</>
	)
}

export default Media
