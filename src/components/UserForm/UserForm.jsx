import { useState } from 'react'
import { postData } from '../../api'
import { Button } from '../../components/Button'
import { Modal } from '../Modal'
import { TextInput } from '../TextInput'
import * as Styled from './styles'

const onSubmit = (userData, userType) => {
	if (userType === 2) postData('teachers', userData)
	if (userType === 3) postData('students', userData)
}

export const UserForm = ({ title, userType, isOpen, onClose }) => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [cpf, setCpf] = useState('')
	const [password, setPassword] = useState('')
	const [specialization, setSpecialization] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		const userData = {
			name,
			email,
			cpf,
			password,
		}
		if (userType === 2) {
			userData.specialization = specialization
		}
		onSubmit(userData, userType)
		onClose()
	}

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<Styled.Container>
				<Styled.Header>
					<h3>{title}</h3>
				</Styled.Header>
				<form onSubmit={handleSubmit}>
					<TextInput
						key="name"
						type="text"
						id="name"
						onChange={(e) => setName(e.target.value)}
						value={name}
						required={true}
						labelValue="Nome"
					/>
					<TextInput
						key="email"
						type="text"
						id="email"
						onChange={(e) => setEmail(e.target.value)}
						value={email}
						required={true}
						labelValue="E-mail"
					/>
					<TextInput
						key="cpf"
						type="text"
						id="cpf"
						onChange={(e) => setCpf(e.target.value)}
						value={cpf}
						required={true}
						labelValue="CPF"
					/>
					<TextInput
						key="password"
						type="password"
						id="password"
						onChange={(e) => setPassword(e.target.value)}
						value={password}
						required={true}
						labelValue="Senha"
					/>
					{userType === 2 && (
						<TextInput
							key="specialization"
							type="text"
							id="specialization"
							onChange={(e) => setSpecialization(e.target.value)}
							value={specialization}
							required={true}
							labelValue="Especialidade"
						/>
					)}
					<div className="button-container">
						<Button>Criar</Button>
					</div>
				</form>
			</Styled.Container>
		</Modal>
	)
}
