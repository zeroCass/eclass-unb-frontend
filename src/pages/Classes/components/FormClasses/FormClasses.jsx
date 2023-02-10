import { useState } from 'react'
import { Button } from '../../../../components/Button'
import { SearchModal } from '../../../../components/SearchModal'
import { TextInput } from '../../../../components/TextInput'
import * as Styled from './styles'

export const FormClasses = ({ onSubmit }) => {
	const [classNameID, setClassNameID] = useState('')
	const [capacity, setCapacity] = useState('')
	const [startTime, setStartTime] = useState('')
	const [endTime, setEndTime] = useState('')
	const [password, setPassword] = useState('')
	const [subject, setSubject] = useState(null)
	const [isOpen, setIsOpen] = useState(false)

	const handleSearch = (item) => {
		setSubject(item)
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

	const options = [
		{
			name: 'ciencia da computacao',
			id: 34,
		},
		{
			name: 'engenharia da computacao',
			id: 33,
		},
		{
			name: 'engenharia de software',
			id: 32,
		},
		{
			name: 'economia',
			id: 1,
		},
		{
			name: 'matematica',
			id: 2,
		},
		{
			name: 'fisica',
			id: 12,
		},
		{
			name: 'quimica',
			id: 245,
		},
	]

	return (
		<Styled.Container>
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
				<Styled.Select onClick={() => setIsOpen(true)}>
					<SearchModal
						data={options}
						isOpen={isOpen}
						onClose={() => setIsOpen(false)}
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
		</Styled.Container>
	)
}
