import { useNavigate } from 'react-router-dom'
import styles from './style.module.css'

export const ButtonsContainer = () => {
	const navigate = useNavigate()
	return (
		<div className={styles['button-container-flex']}>
			<button>Enviar</button>
			<button onClick={() => navigate('/login')}>Voltar</button>
		</div>
	)
}
