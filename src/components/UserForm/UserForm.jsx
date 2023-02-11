import { useState } from 'react'
import { Button } from '../../components/Button'
import { Modal } from '../Modal'
import { TextInput } from '../TextInput'
import * as Styled from './styles'

export const UserForm = ({ title, userType, onSubmit, isOpen, onClose }) => {
	const [registrationID, setRegistrationID] = useState('')
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [cpf, setCpf] = useState('')
	const [specialization, setSpecialization] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		onSubmit()
	}

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<Styled.Container>
				<Styled.Header>
					<h3>{title}</h3>
				</Styled.Header>
				<form onSubmit={handleSubmit}>
					<TextInput
						key="registrationID"
						type="text"
						id="registrationID"
						onChange={(e) => setRegistrationID(e.target.value)}
						value={registrationID}
						required={true}
						labelValue="Nome"
					/>
					<TextInput
						key="name"
						type="text"
						id="name"
						onChange={(e) => setName(e.target.value)}
						value={name}
						required={true}
						labelValue="Matrícula"
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
					{userType === 1 && (
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
