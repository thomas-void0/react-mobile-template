//接口返回数据类型限制
export interface ApiResData<T> {
	message: string
	result: T | null
	success: boolean
}
