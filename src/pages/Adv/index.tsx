// 广告主
import React, { FC } from 'react'
import Entry from './components/Entry'
import Step1 from './components/Step1'
import Step2 from './components/Step2'
import Step3 from './components/Step3'
import Step4 from './components/Step4'
import Step5 from './components/Step5'
import Step6 from './components/Step6'
import Step7 from './components/Step7'
import useUserLoginStatus from '@common/hooks/useUserLoginStatus'
import CarouselContainer from '@components/CarouselContainer'

const Adv: FC<any> = () => {
	const userInfo = useUserLoginStatus()
	console.log('userInfo', userInfo)
	let flag = false
	return flag ? (
		<Entry />
	) : (
		<CarouselContainer
			content={[
				<Step1 key="step1" />,
				<Step2 key="step2" />,
				<Step3 key="step3" />,
				<Step4 key="step4" />,
				<Step5 key="step5" />,
				<Step6 key="step6" />,
				<Step7 key="step7" />
			]}
		/>
	)
}

export default Adv
