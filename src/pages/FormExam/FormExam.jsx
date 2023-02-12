import { useLocation } from 'react-router-dom'

export const FormExam = () => {
	const location = useLocation()
	const data = location.state
	console.log(data)
	return <h1>CRIAR AVALICAO</h1>
}
