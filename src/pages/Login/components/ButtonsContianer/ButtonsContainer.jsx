import { Link } from 'react-router-dom'
import styles from './style.module.css'

export const ButtonsContainer = () => {
	return (
		<div className={styles['button-container']}>
			<button>Login</button>
			<p>
				<Link to="/register">Solicitar Cadastro</Link>
			</p>
			<p>
				<Link to="/forgot-password">Esqueci a Senha</Link>
			</p>
		</div>
	)
}
