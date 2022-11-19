import Menu from '@/components/layout/sidebar/menu/Menu'
import { menu } from '@/components/layout/sidebar/menu/menu.data'
import { useAuth } from '@/hooks/useAuth'
import { api } from '@/store/api/api'
import Link from 'next/link'
import { FC } from 'react'
import styles from './Sidebar.module.scss'

const Sidebar: FC = () => {
	const { user } = useAuth()

	const { data } = api.useGetProfileQuery(null, {
		skip: !user
	})

	return (
		<aside className={styles.sidebar}>
			<Link href='/'>
				<a className={styles.logo}>Vietube</a>
			</Link>

			<Menu title='Меню' items={menu} />

			{user && (
				<Menu
					title='Мои подписки'
					items={
						data?.subscriptions.map(({ toChannel }) => ({
							image: toChannel.avatarPath,
							title: toChannel.name,
							link: '/c/' + toChannel.id
						})) || []
					}
				/>
			)}

			<div className={styles.copy}>© 2022 Vietube by talivel</div>
		</aside>
	)
}

export default Sidebar
