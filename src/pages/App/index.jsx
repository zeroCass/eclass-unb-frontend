import { Route, Routes } from 'react-router-dom'
import { MainRoute } from '../../routes/MainRoute'
import { RequireAuth } from '../../routes/RequireAuth'
import { Login } from '../Login'
import { Register } from '../Register'

function App() {
	return (
		<Routes>
			<Route element={<RequireAuth />}>
				<Route element={<MainRoute />} />
			</Route>
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
		</Routes>
	)
}

export default App
