import Layout from '@/components/layout/Layout'
import Catalog from '@/components/pages/home/catalog/Catalog'
import Discover from '@/components/pages/home/discover/Discover'
import { IHome } from '@/components/pages/home/home.interface'
import { FC } from 'react'

const Home: FC<IHome> = ({ randomVideo, topVideo, newVideos }) => {
	return (
		<Layout title='Vietube | Видеохостинг'>
			<Discover topVideo={topVideo} randomVideo={randomVideo} />
			<Catalog newVideos={newVideos} />
		</Layout>
	)
}

export default Home
