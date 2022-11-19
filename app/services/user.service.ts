import { IUser } from '@/types/user.interface'
import { $host } from '../api/axios'

export const USER = 'user'

export const UserService = {
	async getAll() {
		return $host.get<IUser[]>(`/${USER}`)
	},

	async getUser(id: number) {
		return $host.get<IUser>(`/${USER}/by-id/${id}`)
	}
}
