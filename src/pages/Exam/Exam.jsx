import { useLocation } from 'react-router-dom'

export const Exam = () => {
	const location = useLocation()
	const examData = location.state
	console.log(examData)
	return <h1>AVALICAO</h1>
}
