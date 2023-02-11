import { useState } from 'react'
import { Button } from '../../../../components/Button'
import { Modal } from '../../../../components/Modal'
import * as Styled from './styles'

export const QuestionsForm = ({ onSubmit, isOpen, onClose }) => {
	const [statement, setStatement] = useState('')
	const [isVisible, setIsVisible] = useState('false')
	const [answer, setAnswer] = useState('')
	const [multipleChoice, setMultipleChoice] = useState('false')
	const [optionA, setOptionA] = useState('')
	const [optionB, setOptionB] = useState('')
	const [optionC, setOptionC] = useState('')
	const [optionD, setOptionD] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		onSubmit({
			statement,
			isVisible,
			answer,
			multipleChoice,
			optionA,
			optionB,
			optionC,
			optionD,
		})
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
								<label htmlFor="option-b">Opção A:</label>
								<textarea
									name="option-a"
									value={optionA}
									onChange={(e) => setOptionA(e.target.value)}
									cols={60}
									rows={2}
									required
								/>
							</Styled.TextArea>
							<Styled.TextArea>
								<label htmlFor="option-b">Opção B:</label>
								<textarea
									name="option-b"
									value={optionB}
									onChange={(e) => setOptionB(e.target.value)}
									cols={60}
									rows={2}
									required
								/>
								<Styled.TextArea>
									<label htmlFor="option-c">Opção C:</label>
									<textarea
										name="option-c"
										value={optionC}
										onChange={(e) => setOptionC(e.target.value)}
										cols={60}
										rows={2}
									/>
								</Styled.TextArea>
								<Styled.TextArea>
									<label htmlFor="option-d">Opção D:</label>
									<textarea
										name="option-d"
										value={optionD}
										onChange={(e) => setOptionD(e.target.value)}
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
								multipleChoice === 'true'
									? 'Ex: Opção A'
									: 'Resposta...'
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
