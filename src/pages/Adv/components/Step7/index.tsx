// 走马灯第七页
import React, { FC } from 'react'
import PageLayout from '@components/PageLayout'
import Content from './components/Conten'
import useUserLoginStatus from '@common/hooks/useUserLoginStatus'
import bg from './img/bg.png'

const Step7: FC<any> = () => {
	const userInfo = useUserLoginStatus()
	console.log('userInfo', userInfo)

	return (
		<PageLayout bg={bg} visibleUp={false}>
			<Content />
		</PageLayout>
	)
}

export default Step7
