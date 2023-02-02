import { useNavigate } from 'react-router-dom'
import './style.css'

export const ButtonsContainer = () => {
	const navigate = useNavigate()
	return (
		<div className="button-container-flex">
			<button>Enviar</button>
			<button onClick={() => navigate('/login')}>Voltar</button>
		</div>
	)
}
