import { IMediaResponse } from '@/services/media/media.interface'
import { $host } from '../../api/axios'

export const MediaService = {
	async upload(
		media: FormData,
		folder?: string,
		setValue?: (val: number) => void
	) {
		return $host.post<IMediaResponse>('/media', media, {
			params: { folder },
			headers: { 'Content-Type': 'multipart/form-data' },
			onUploadProgress: progressEvent => {
				if (setValue) {
					const progress = (progressEvent.loaded / progressEvent.total) * 100
					setValue(Math.ceil(progress))
				}
			}
		})
	}
}
