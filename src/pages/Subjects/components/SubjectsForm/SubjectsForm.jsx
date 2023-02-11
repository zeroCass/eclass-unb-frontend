import { useState } from 'react'
import { Button } from '../../../../components/Button'
import { Modal } from '../../../../components/Modal'
import { TextInput } from '../../../../components/TextInput'
import * as Styled from './styles'

export const SubjectsForm = ({ onSubmit, isOpen, onClose }) => {
	const [name, setName] = useState('')
	const [course, setCourse] = useState('')
	const [description, setDescription] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		onSubmit()
	}
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<Styled.Container>
				<Styled.Header>
					<h3>Cadastrar Matéria</h3>
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
							key="course"
							type="text"
							id="course"
							onChange={(e) => setCourse(e.target.value)}
							value={course}
							required={true}
							labelValue="Curso"
						/>
						<Styled.TextArea>
							<textarea
								value={description}
								onChange={(e) => setDescription(e.target.value)}
								cols={60}
								rows={10}
								placeholder={'Descrição...'}
							/>
						</Styled.TextArea>

						<div className="button-container">
							<Button>Criar</Button>
						</div>
					</form>
				</Styled.Header>
			</Styled.Container>
		</Modal>
	)
}
