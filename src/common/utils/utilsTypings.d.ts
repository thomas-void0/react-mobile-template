//对加密参数的类型约束
export interface IXYZParam {
	nonce?: string
	xyz?: string
	[propName: string]: any
}

//对接口返回值进行约束
export interface ReturnResData {
	success: boolean
	result: any
	message: string
}
