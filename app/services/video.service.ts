import { IVideo } from '@/types/video.interface'
import { $host } from '../api/axios'

export const VIDEO = 'video'

export const VideoService = {
	async getAll() {
		return $host.get<IVideo[]>(`/${VIDEO}`)
	},

	async getMostPopular() {
		return $host.get<IVideo[]>(`/${VIDEO}/most-popular`)
	}
}
