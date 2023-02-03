import { Link } from 'react-router-dom'
import { Button } from '../../../../components/Button'
import styles from './style.module.css'

export const ButtonsContainer = () => {
	return (
		<div className={styles['button-container']}>
			<Button margin={'20px 0'}>Login</Button>
			<p>
				<Link to="/register">Solicitar Cadastro</Link>
			</p>
			<p>
				<Link to="/forgot-password">Esqueci a Senha</Link>
			</p>
		</div>
	)
}
