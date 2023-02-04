/*eslint-disable */
import { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext/context'
import { ForgotPass } from '../pages/ForgotPass'
import { Login } from '../pages/Login'
import { Register } from '../pages/Register'
import { MainRoute } from './MainRoute'
import { RequireAuth } from './RequireAuth'

const MyRoutes = () => {
	const authContext = useContext(AuthContext)
	const { authState } = authContext
	return (
		<Routes>
			<Route element={<RequireAuth />}>
				<Route path="*" element={<MainRoute />} />
			</Route>
			<Route
				path="/login"
				element={authState.token ? <Navigate to={'/'} /> : <Login />}
			/>
			<Route
				path="/register"
				element={authState.token ? <Navigate to={'/'} /> : <Register />}
			/>
			<Route
				path="/forgot-password"
				element={authState.token ? <Navigate to={'/'} /> : <ForgotPass />}
			/>
		</Routes>
	)
}

export default MyRoutes
