import { Outlet } from 'react-router'
import { HeaderMenu } from '../components/HeaderMenu'

export const MainLayout = () => {
	return (
		<main>
			<HeaderMenu />
			<Outlet />
		</main>
	)
}
