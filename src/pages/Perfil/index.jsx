import { useNavigate } from 'react-router-dom'

export const Perfil = () => {
	const navigate = useNavigate()
	const EditPerfil = () => {
		navigate('/perfil/edit')
	}

	return (
		<div>
			<h1>Perfil PAGE</h1>
			<button onClick={EditPerfil}>Editar</button>
		</div>
	)
}
