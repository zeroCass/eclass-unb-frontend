import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ModalsPerfil, MyClass } from './ModalsPerfil'

export const ModalContent = (modalContent) => {
	const [classes, setClasses] = useState([])
	const navigate = useNavigate()

	useEffect(() => {
		fetch('classes.json')
			.then((res) => res.json())
			.then((data) => setClasses(data))
			.catch((error) => console.error(error))
	}, [])

	switch (modalContent) {
		case 'Alterar Senha':
			return (
				<ModalsPerfil>
					<div className="title">
						<h3>Alterar Senha</h3>
					</div>
				</ModalsPerfil>
			)
		case 'Minhas Turmas':
			return (
				<ModalsPerfil>
					<div className="title">
						<h3>Minhas Turmas</h3>
					</div>

					<div className="info-div">
						<ul>
							{classes.map((classes) => (
								<li key={classes.classID}>
									<MyClass className="info-div">
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
									</MyClass>
								</li>
							))}
						</ul>
					</div>
				</ModalsPerfil>
			)
		case 'Notas':
			return (
				<ModalsPerfil>
					<h3>Notas</h3>
				</ModalsPerfil>
			)
		case 'Questões':
			return (
				<ModalsPerfil>
					<h3>Questões</h3>
				</ModalsPerfil>
			)
		case 'Avaliações':
			return (
				<ModalsPerfil>
					<h3>Avaliações</h3>
				</ModalsPerfil>
			)
		default:
			return null
	}
}
