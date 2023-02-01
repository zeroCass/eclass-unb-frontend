import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext/context'

export const RequireAuth = () => {
	const authContext = useContext(AuthContext)
	const { authState } = authContext

	return authState.token ? <Outlet /> : <Navigate to="/login" />
}
