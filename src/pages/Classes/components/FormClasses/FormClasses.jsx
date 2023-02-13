import { useContext, useState } from 'react'
import { getData } from '../../../../api'
import { Button } from '../../../../components/Button'
import { Modal } from '../../../../components/Modal'
import { SearchModal } from '../../../../components/SearchModal'
import { TextInput } from '../../../../components/TextInput'
import { AuthContext } from '../../../../contexts/AuthContext/context'
import * as Styled from './styles'

const fetchSubjects = async (teacherID) => {
	const subjects = await getData('subjects')
	const filteredSubjects = subjects.filter((subject) =>
		subject.teachers.find((teacher) => teacher.id === teacherID),
	)
	return filteredSubjects
}

export const FormClasses = ({ onSubmit, isOpen, onClose }) => {
	const authContext = useContext(AuthContext)
	const { authState } = authContext

	const [isLoading, setLoading] = useState(false)
	const [coursesData, setCoursesData] = useState([])

	const [name, setClassNameID] = useState('')
	const [size, setCapacity] = useState('')
	const [period, setPeriod] = useState('')
	const [startTime, setStartTime] = useState(new Date())
	const [endTime, setEndTime] = useState(new Date())
	const [password, setPassword] = useState('')
	const [subject, setSubject] = useState(null)
	const [openSearchModal, setOpenSearchModal] = useState(false)

	const formattedTime = {
		hour: '2-digit',
		minute: '2-digit',
		dateStyle: undefined,
	}

	const handleSearch = (item) => {
		setSubject(item)
	}

	const handleOpenSearchModal = async () => {
		setLoading(true)
		try {
			const data = await fetchSubjects(authState.id)
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
			name,
			size: parseInt(size),
			startTime,
			endTime,
			password,
			period: parseInt(period),
			subject: subject.id,
			createAt: new Date(),
			students: [],
			teachers: authState.userType === 2 ? [authState.id] : [],
			exams: [],
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
								key="name"
								type="text"
								id="name"
								onChange={(e) => setClassNameID(e.target.value)}
								value={name}
								required={true}
								labelValue="Nome da Turma"
							/>
							<TextInput
								key="size"
								type="text"
								id="size"
								onChange={(e) => setCapacity(e.target.value)}
								value={size}
								required={true}
								labelValue="Capacidade da Turma"
							/>
							<TextInput
								key="startTime"
								type="text"
								id="startTime"
								onChange={(e) => setStartTime(e.target.value)}
								value={startTime.toLocaleDateString([], formattedTime)}
								required={true}
								disabled={true}
								labelValue="Horário de Início"
							/>
							<TextInput
								key="endTime"
								type="text"
								id="endTime"
								onChange={(e) => setEndTime(e.target.value)}
								value={endTime.toLocaleDateString([], formattedTime)}
								required={true}
								disabled={true}
								labelValue="Horário de Fim"
							/>
							<TextInput
								key="period"
								type="text"
								id="period"
								onChange={(e) => setPeriod(e.target.value)}
								value={period}
								required={true}
								labelValue="Semestre"
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
