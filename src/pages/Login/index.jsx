import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import loginImage from '../../assets/svg/loginImage.svg'
import logo from '../../assets/svg/logoBlack.svg'
import { login } from '../../contexts/AuthContext/actions'
import { AuthContext } from '../../contexts/AuthContext/context'
import './style.css'

export const Login = () => {
	const authContext = useContext(AuthContext)
	const { authDispatch } = authContext

	const [registrationID, setRegistrationID] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = () => {
		login(authDispatch)
	}

	return (
		<section className="login-section">
			<div className="login-container">
				<div className="logo-container">
					<img src={logo} className="logo" alt="e-class logo" />
					<h1>Log In</h1>
				</div>
				<form onSubmit={handleSubmit}>
					<div className="text-field">
						<input
							type="text"
							id="registrationID"
							autoComplete="off"
							onChange={(e) => setRegistrationID(e.target.value)}
							value={registrationID}
							required
						/>
						<label htmlFor="registrationID">Matrícula</label>
					</div>
					<div className="text-field">
						<input
							type="password"
							id="password"
							onChange={(e) => setPassword(e.target.value)}
							value={password}
							required
						/>
						<label htmlFor="password">Senha</label>
					</div>

					<div className="button-container">
						<button>Login</button>
						<p>
							<Link to="/register">Solicitar Cadastro</Link>
						</p>
						<p>
							<a href=".">Esqueci a Senha</a>
						</p>
					</div>
				</form>
			</div>
			<div className="login-img-container">
				<img src={loginImage} className="loginImage" alt="login image" />
			</div>
		</section>
	)
}
