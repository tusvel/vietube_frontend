import UserAvatar from '@/components/ui/user-avatar/UserAvatar'
import { IUser } from '@/types/user.interface'
import { formatNumberToK } from '@/utils/format-number-to-k'
import { FC } from 'react'
import styles from './ChannelInfoSmall.module.scss'

const ChannelInfoSmall: FC<{ channel: IUser; message?: string }> = ({
	channel,
	message
}) => {
	return (
		<div className={styles.profile_info}>
			{channel.avatarPath && <UserAvatar user={channel} />}

			<div>
				<div className={styles.name}>{channel.name}</div>
				<div className={styles.subscribers_count}>
					{message ||
						formatNumberToK(channel.subscribersCount) + ' subscribers'}
				</div>
			</div>
		</div>
	)
}

export default ChannelInfoSmall
