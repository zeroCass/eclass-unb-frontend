import { useReducer } from 'react'
import { AuthContext } from './context'
import { data } from './data'
import { reducer } from './reducer'

export const AuthProvider = ({ children }) => {
	/* eslint-disable */
	const [authState, authDispatch] = useReducer(reducer, data)
	return (
		<AuthContext.Provider value={{ authState, authDispatch }}>
			{children}
		</AuthContext.Provider>
	)
}
