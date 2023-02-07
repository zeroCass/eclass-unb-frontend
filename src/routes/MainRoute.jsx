import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { MainLayout } from '../components/MainLayout'
import { AuthContext } from '../contexts/AuthContext/context'
import { Classes } from '../pages/Classes'
import { Perfil } from '../pages/Perfil'
import { Questions } from '../pages/Questions'
import { Students } from '../pages/Students'
import { Subjects } from '../pages/Subjects'
import { Teachers } from '../pages/Teachers'

export const MainRoute = () => {
	const authContext = useContext(AuthContext)
	const {
		authState: { userType },
	} = authContext

	return (
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
				<Route path="/subjects" element={<Subjects />} />
				{userType === 0 && (
					<>
						<Route path="/students" element={<Students />} />
						<Route path="/teachers" element={<Teachers />} />
					</>
				)}
			</Route>
		</Routes>
	)
}
