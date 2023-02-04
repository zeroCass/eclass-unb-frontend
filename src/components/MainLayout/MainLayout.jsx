import { Outlet } from 'react-router'
import { HeaderMenu } from '../HeaderMenu'

export const MainLayout = () => {
	return (
		<main>
			<HeaderMenu />
			<Outlet />
		</main>
	)
}
