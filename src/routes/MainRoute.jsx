import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { MainLayout } from '../components/MainLayout'
import { AuthContext } from '../contexts/AuthContext/context'
import { ClassDescription } from '../pages/ClassDescription'
import { Classes } from '../pages/Classes'
import { Exam } from '../pages/Exam/Exam'
import { FormExam } from '../pages/FormExam'
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
				</Route>
				<Route path="/class-description/*" element={<ClassDescription />} />
				<Route path="/exam/*">
					<Route path="details" element={<Exam />} />
					<Route path="create" element={<FormExam />} />
				</Route>
				<Route path="/subjects" element={<Subjects />} />
				{userType === 1 && (
					<>
						<Route path="/students" element={<Students />} />
						<Route path="/teachers" element={<Teachers />} />
					</>
				)}
			</Route>
		</Routes>
	)
}
