import IconsRight from '@/components/layout/header/icons-right/IconsRight'
import Search from '@/components/layout/header/search/Search'
import { FC } from 'react'
import styles from './Header.module.scss'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Search />
			<IconsRight />
		</header>
	)
}

export default Header
