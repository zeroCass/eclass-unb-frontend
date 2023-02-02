import { Link } from 'react-router-dom'
import './style.css'

export const ButtonsContainer = () => {
	return (
		<div className="button-container">
			<button>Login</button>
			<p>
				<Link to="/register">Solicitar Cadastro</Link>
			</p>
			<p>
				<a href=".">Esqueci a Senha</a>
			</p>
		</div>
	)
}
