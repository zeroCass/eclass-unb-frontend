import { useNavigate } from 'react-router-dom'
import { Button } from '../../../../components/Button'
import styles from './style.module.css'

export const ButtonsContainer = () => {
	const navigate = useNavigate()
	return (
		<div className={styles['button-container-flex']}>
			<Button margin={'20px 0'}>Enviar</Button>
			<Button margin={'20px 0'} onClick={() => navigate('/login')}>
				Voltar
			</Button>
		</div>
	)
}
