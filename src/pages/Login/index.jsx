import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../../contexts/AuthContext/actions'
import { AuthContext } from '../../contexts/AuthContext/context'

export const Login = () => {
	const navigate = useNavigate()
	const authContext = useContext(AuthContext)
	const { authDispatch } = authContext

	const handleClick = () => {
		login(authDispatch)
	}

	return (
		<div>
			<h1>LOGIN PAGE</h1>
			<button onClick={handleClick}>Entrar</button>
			<button onClick={() => navigate('/register', { replace: true })}>
				Registrar
			</button>
		</div>
	)
}
