import { Route, Routes } from 'react-router-dom'
import { MainLayout } from '../components/MainLayout'
import { Classes } from '../pages/Classes'
import { Perfil } from '../pages/Perfil'
import { Questions } from '../pages/Questions'

export const MainRoute = () => (
	<Routes>
		<Route element={<MainLayout />}>
			<Route path="/" element={<Classes />} />
			<Route path="/classes" element={<Classes />} />
			<Route path="/questions" element={<Questions />} />
			<Route path="/perfil/*">
				<Route index element={<Perfil />} />
				<Route path="edit" element={<h1>Editando</h1>} />
				<Route path="delete" element={<h1>Deletando</h1>} />
			</Route>
		</Route>
	</Routes>
)
