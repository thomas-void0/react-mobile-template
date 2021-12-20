// 走马灯第一页
import React, { FC } from 'react'
import PageLayout from '@components/PageLayout'
import useUserLoginStatus from '@common/hooks/useUserLoginStatus'
import bg from './img/bg.png'

const Step1: FC<any> = () => {
	const userInfo = useUserLoginStatus()
	console.log('userInfo', userInfo)
	return <PageLayout bg={bg}>11111111</PageLayout>
}

export default Step1
