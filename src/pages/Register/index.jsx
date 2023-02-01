import { useNavigate } from 'react-router-dom'

export const Register = () => {
	const navigation = useNavigate()
	const handleClick = () => {
		navigation('/login', { replace: true })
	}

	return (
		<div>
			<h1>REGISTER PAGE</h1>
			<button onClick={handleClick}>VOLTAR</button>
		</div>
	)
}
