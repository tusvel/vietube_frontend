import { IMenuItem } from '@/components/layout/sidebar/menu/menu.interface'
import MenuItem from '@/components/layout/sidebar/menu/MenuItem'
import Line from '@/components/ui/Line'
import { FC } from 'react'
import styles from './Menu.module.scss'

interface IMenu {
	title: string
	items: IMenuItem[]
}

const Menu: FC<IMenu> = ({ items, title }) => {
	return (
		<nav className={styles.mnu_sidebar}>
			<h3>{title}</h3>
			<ul>
				{items.map(menuItem => (
					<MenuItem item={menuItem} key={menuItem.link} />
				))}
			</ul>
			<Line />
		</nav>
	)
}

export default Menu
