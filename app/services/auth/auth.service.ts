import { IAuthData } from '@/services/auth/auth.helper'
import { $host } from '../../api/axios'

const AUTH = 'auth'

export const AuthService = {
	async login(email: string, password: string) {
		const response = await $host.post<IAuthData>(`/${AUTH}/login`, {
			email,
			password
		})

		return response.data
	},

	async register(email: string, password: string) {
		const response = await $host.post<IAuthData>(`/${AUTH}/register`, {
			email,
			password
		})

		return response.data
	}
}
