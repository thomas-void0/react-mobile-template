/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

declare module 'axios' {
	interface AxiosInstance {
		get<R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>
		post<R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R>
	}
}
