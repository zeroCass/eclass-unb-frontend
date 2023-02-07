import { useReducer } from 'react'
import { AuthContext } from './context'
import { reducer } from './reducer'

const initialConfig = {
	email: '',
	name: '',
	registrationID: '',
	userType: '',
	token: false,
}

export const AuthProvider = ({ children }) => {
	/* eslint-disable */
	const [authState, authDispatch] = useReducer(reducer, initialConfig)
	return (
		<AuthContext.Provider value={{ authState, authDispatch }}>
			{children}
		</AuthContext.Provider>
	)
}
