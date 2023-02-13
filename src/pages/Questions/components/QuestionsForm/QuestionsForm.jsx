import { useContext, useState } from 'react'
import { postData } from '../../../../api'
import { Button } from '../../../../components/Button'
import { Modal } from '../../../../components/Modal'
import { AuthContext } from '../../../../contexts/AuthContext/context'
import * as Styled from './styles'

const onSubmit = (url, questionData) => {
	console.log(url, questionData)
	postData(url, questionData)
}

export const QuestionsForm = ({ isOpen, onClose }) => {
	const authContext = useContext(AuthContext)
	const { authState } = authContext

	const [statement, setStatement] = useState('')
	const [isVisible, setIsVisible] = useState('false')
	const [answer, setAnswer] = useState('')
	const [multipleChoice, setMultipleChoice] = useState('false')
	const [option1, setOption1] = useState('')
	const [option2, setOption2] = useState('')
	const [option3, setOption3] = useState('')
	const [option4, setOption4] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		if (authState.userType === 2) {
			const questionsData = {
				statement,
				is_visibility: isVisible === 'true',
				answer,
				students: [],
				teacher: authState.id,
			}
			if (multipleChoice === 'false') {
				onSubmit('discursive-questions', questionsData)
			} else {
				const multipleQuestions = {
					...questionsData,
					option1,
					option2,
					option3,
					option4,
					answer: parseInt(answer),
				}
				onSubmit('multiple-questions', multipleQuestions)
			}
			onClose()
		}
	}
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<Styled.Container>
				<Styled.Header>
					<h3>Criar Questão</h3>
				</Styled.Header>
				<form onSubmit={handleSubmit}>
					<Styled.TextArea>
						<textarea
							value={statement}
							onChange={(e) => setStatement(e.target.value)}
							cols={60}
							rows={5}
							placeholder={'Enunciado...'}
						/>
					</Styled.TextArea>
					<Styled.RadioContainer>
						<Styled.Header>
							<h3>Visibilidade:</h3>
						</Styled.Header>
						<div>
							<input
								type={'radio'}
								name="visibility"
								required
								value={'true'}
								id="public"
								checked={isVisible === 'true'}
								onChange={(e) => setIsVisible(e.target.value)}
							/>
							<label htmlFor="public">Público</label>
						</div>
						<div>
							<input
								type={'radio'}
								name="visibility"
								required
								value={'false'}
								id="private"
								checked={isVisible === 'false'}
								onChange={(e) => setIsVisible(e.target.value)}
							/>
							<label htmlFor="private">Privado</label>
						</div>
					</Styled.RadioContainer>
					<Styled.RadioContainer>
						<Styled.Header>
							<h3>Múltipla Escolha:</h3>
						</Styled.Header>
						<div>
							<input
								type={'radio'}
								name="multiple-choice"
								required
								value={'true'}
								id="choice-yes"
								checked={multipleChoice === 'true'}
								onChange={(e) => setMultipleChoice(e.target.value)}
							/>
							<label htmlFor="choice-yes">Sim</label>
						</div>
						<div>
							<input
								type={'radio'}
								name="multiple-choice"
								required
								value={'false'}
								id="choice-no"
								checked={multipleChoice === 'false'}
								onChange={(e) => setMultipleChoice(e.target.value)}
							/>
							<label htmlFor="choice-no">Não</label>
						</div>
					</Styled.RadioContainer>
					{multipleChoice === 'true' && (
						<>
							<Styled.TextArea>
								<label htmlFor="option-b">Opção 1:</label>
								<textarea
									name="option-a"
									value={option1}
									onChange={(e) => setOption1(e.target.value)}
									cols={60}
									rows={2}
									required
								/>
							</Styled.TextArea>
							<Styled.TextArea>
								<label htmlFor="option-b">Opção 2:</label>
								<textarea
									name="option-b"
									value={option2}
									onChange={(e) => setOption2(e.target.value)}
									cols={60}
									rows={2}
									required
								/>
								<Styled.TextArea>
									<label htmlFor="option-c">Opção 3:</label>
									<textarea
										name="option-c"
										value={option3}
										onChange={(e) => setOption3(e.target.value)}
										cols={60}
										rows={2}
									/>
								</Styled.TextArea>
								<Styled.TextArea>
									<label htmlFor="option-d">Opção 4:</label>
									<textarea
										name="option-d"
										value={option4}
										onChange={(e) => setOption4(e.target.value)}
										cols={60}
										rows={2}
									/>
								</Styled.TextArea>
							</Styled.TextArea>
						</>
					)}
					<Styled.TextArea>
						<label htmlFor="answer">Resposta:</label>
						<textarea
							value={answer}
							onChange={(e) => setAnswer(e.target.value)}
							cols={60}
							rows={5}
							placeholder={
								multipleChoice === 'true' ? 'Ex: 1' : 'Resposta...'
							}
						/>
					</Styled.TextArea>
					<div className="button-container">
						<Button>Criar</Button>
					</div>
				</form>
			</Styled.Container>
		</Modal>
	)
}
