import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext/context'

export const Questions = () => {
	const authContext = useContext(AuthContext)
	/* eslint-disable no-unused-vars */
	const { authState, authDispatch } = authContext
	return (
		<div>
			<h1>QUESTIONS PAGE</h1>
		</div>
	)
}
