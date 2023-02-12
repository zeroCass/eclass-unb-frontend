import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Styled from './styles'

export const ModalContent = (modalContent) => {
	const [classes, setClasses] = useState([])
	const navigate = useNavigate()

	useEffect(() => {
		fetch('classesDescription.json')
			.then((res) => res.json())
			.then((data) => setClasses(data))
			.catch((error) => console.error(error))
	}, [])

	switch (modalContent) {
		case 'Alterar Senha':
			return (
				<Styled.ModalsPerfil>
					<div className="title">
						<h3>Alterar Senha</h3>
					</div>
				</Styled.ModalsPerfil>
			)
		case 'Minhas Turmas':
			return (
				<Styled.ModalsPerfil>
					<div className="title">
						<h3>Minhas Turmas</h3>
					</div>

					<div className="info-div">
						<ul>
							{classes.map((classes) => (
								<li key={classes.classID}>
									<Styled.MyClass className="info-div">
										<h4>
											<button
												onClick={() =>
													navigate('/class-description', {
														state: classes,
													})
												}
											>
												{classes.className}
											</button>
											- {classes.teacherName} ({classes.startTime} -
											{classes.endTime})
										</h4>
									</Styled.MyClass>
								</li>
							))}
						</ul>
					</div>
				</Styled.ModalsPerfil>
			)
		case 'Notas':
			return (
				<Styled.ModalsPerfil>
					<h3>Notas</h3>
				</Styled.ModalsPerfil>
			)
		case 'Questões':
			return (
				<Styled.ModalsPerfil>
					<h3>Questões</h3>
				</Styled.ModalsPerfil>
			)
		case 'Avaliações':
			return (
				<Styled.ModalsPerfil>
					<h3>Avaliações</h3>
				</Styled.ModalsPerfil>
			)
		default:
			return null
	}
}
