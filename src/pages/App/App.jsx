/*eslint-disable */
import { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext/context'
import { MainRoute } from '../../routes/MainRoute'
import { RequireAuth } from '../../routes/RequireAuth'
import { Login } from '../Login'
import { Register } from '../Register'

function App() {
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
		</Routes>
	)
}

export default App
