import { useContext, useEffect, useState } from 'react'
import { getData } from '../../../../api'
import { AuthContext } from '../../../../contexts/AuthContext/context'
import { MyClasses } from '../MyClasses'
import * as Styled from './styles'

const fetchClasses = async (userID, userType) => {
	const classes = await getData('classes')
	const filteredClasses = classes.filter((classe) => {
		if (userType === 3)
			return classe.students.find((studentID) => studentID === userID)
		if (userType === 2)
			return classe.teachers.find((teacher) => teacher.id === userID)
	})
	return filteredClasses
}

export const ModalContent = (modalContent) => {
	const authContext = useContext(AuthContext)
	const { authState } = authContext
	const [formattedClassData, setFormattedClassData] = useState([])

	// return a formatted object
	useEffect(() => {
		const fetch = async () => {
			const data = await fetchClasses(authState.id, authState.userType)
			if (data) {
				const newData = data.map((item) => {
					// set dataItem to correspond to the original data
					const dataItem = data.find((data) => data.id === item.id)

					//get the dates
					const startTime = new Date(item.startTime)
					const endTime = new Date(item.endTime)

					return {
						classID: item.id,
						title: `${item.subject.name} - ${item.name}`,
						description: `Professores: ${item?.teachers.map(
							(teacher) => teacher.name,
						)}`,
						timeDate: `${startTime.getHours()}: ${startTime.getMinutes()} as ${endTime.getHours()}: ${endTime.getMinutes()}`,
						dataItem,
					}
				})
				setFormattedClassData(newData)
			}
		}
		fetch()
	}, [authState])

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
						<MyClasses formattedClassData={formattedClassData} />
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
