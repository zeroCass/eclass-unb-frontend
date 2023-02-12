import { useLocation } from 'react-router-dom'
export const ClassDescription = () => {
	const location = useLocation()
	console.log(location.state)
	return (
		<section>
			<h1>Turma X</h1>
		</section>
	)
}
