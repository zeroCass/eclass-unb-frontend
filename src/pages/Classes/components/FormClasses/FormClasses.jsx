import { useState } from 'react'
import { Button } from '../../../../components/Button'
import { Modal } from '../../../../components/Modal'
import { SearchModal } from '../../../../components/SearchModal'
import { TextInput } from '../../../../components/TextInput'
import * as Styled from './styles'

const fetchData = async () => {
	return new Promise((resolve) => {
		setTimeout(async () => {
			const res = await fetch('./courses.json')
			const data = await res.json()
			resolve(data)
		}, 2000)
	})
}

export const FormClasses = ({ onSubmit, isOpen, onClose }) => {
	const [isLoading, setLoading] = useState(false)
	const [coursesData, setCoursesData] = useState([])

	const [classNameID, setClassNameID] = useState('')
	const [capacity, setCapacity] = useState('')
	const [startTime, setStartTime] = useState('')
	const [endTime, setEndTime] = useState('')
	const [password, setPassword] = useState('')
	const [subject, setSubject] = useState(null)
	const [openSearchModal, setOpenSearchModal] = useState(false)

	const handleSearch = (item) => {
		setSubject(item)
	}

	const handleOpenSearchModal = async () => {
		setLoading(true)
		try {
			const data = await fetchData()
			setCoursesData(data)
			setOpenSearchModal(true)
		} catch (e) {
			console.log(e)
		} finally {
			setLoading(false)
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		onSubmit({
			classNameID,
			capacity,
			startTime,
			endTime,
			password,
			subject,
		})
	}

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<Styled.Container>
				{isLoading ? (
					<div>
						<h2>Loading</h2>
					</div>
				) : (
					<>
						<Styled.Header>
							<h3>Cadastrar Turma</h3>
						</Styled.Header>
						<form onSubmit={handleSubmit}>
							<TextInput
								key="classNameID"
								type="text"
								id="classNameID"
								onChange={(e) => setClassNameID(e.target.value)}
								value={classNameID}
								required={true}
								labelValue="Nome da Turma"
							/>
							<TextInput
								key="capacity"
								type="text"
								id="capacity"
								onChange={(e) => setCapacity(e.target.value)}
								value={capacity}
								required={true}
								labelValue="Capacidade da Turma"
							/>
							<TextInput
								key="startTime"
								type="text"
								id="startTime"
								onChange={(e) => setStartTime(e.target.value)}
								value={startTime}
								required={true}
								labelValue="Horário de Início"
							/>
							<TextInput
								key="endTime"
								type="text"
								id="endTime"
								onChange={(e) => setEndTime(e.target.value)}
								value={endTime}
								required={true}
								labelValue="Horário de Fim"
							/>
							<TextInput
								key="password"
								type="text"
								id="password"
								onChange={(e) => setPassword(e.target.value)}
								value={password}
								labelValue="Senha de Acesso (Opcional)"
							/>
							<Styled.Select onClick={handleOpenSearchModal}>
								<SearchModal
									placeholder={'Nome da Materia'}
									data={coursesData}
									isOpen={openSearchModal}
									onClose={() => setOpenSearchModal(false)}
									onSelection={(item) => handleSearch(item)}
								/>
								<h3>Escolha a materia</h3>
								<div className="option">
									{subject?.name || 'Nenhuma selecionada'}
								</div>
							</Styled.Select>
							<div className="button-container">
								<Button>Criar</Button>
							</div>
						</form>
					</>
				)}
			</Styled.Container>
		</Modal>
	)
}
