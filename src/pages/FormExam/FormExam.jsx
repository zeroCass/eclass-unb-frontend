/* eslint-disable */
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Button } from '../../components/Button'
import { SearchModal } from '../../components/SearchModal'
import { TextInput } from '../../components/TextInput'
import { SelectedQuestions } from './SelectedQuestions/SelectedQuestions'
import * as Styled from './styles'

export const FormExam = () => {
	const location = useLocation()
	const classDetails = location.state
	// console.log(classDetails)

	const [name, setName] = useState('')
	const [startTime, setStartTime] = useState('')
	const [endTime, setEndTime] = useState('')
	const [isVisible, setVisible] = useState('true')

	// state to handle fetch logic
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(false)

	const [questions, setQuestions] = useState([])
	const [selectedQuestions, setSelectedQuestions] = useState([])
	const [isModalOpen, setIsModalOpen] = useState(false)

	const fetchData = async () => {
		const url = '/questions.json'
		return new Promise((resolve) => {
			setTimeout(async () => {
				const res = await fetch(url, {
					headers: {
						'Content-Type': 'application/json',
						Accept: 'application/json',
					},
				})
				const data = await res.json()
				resolve(data)
			}, 2000)
		})
	}

	// load teachers questions on mount
	useEffect(() => {
		setLoading(true)
		fetchData()
			.then((res) => {
				const formattedData = res.map((question) => {
					return {
						...question,
						id: question.questionID,
						name: question.statement,
					}
				})
				setQuestions(formattedData)
			})
			.catch((err) => setError(err.message || 'error!!!'))
			.finally(() => setLoading(false))
	}, [])

	const handleOpenSearchModal = (event) => {
		event.preventDefault()
		setIsModalOpen(true)
	}

	const handleScoreChange = (scoreValue, id) => {
		const newSelectedQuestions = selectedQuestions.map((question) => {
			if (question.id === id) {
				return { ...question, score: scoreValue }
			}
			return question
		})
		setSelectedQuestions(newSelectedQuestions)
	}

	const handleOnSubmit = (event) => {
		event.preventDefault()
		const sendData = {
			teacherID: classDetails.teacherID,
			classID: classDetails.classID,
			name,
			startTime,
			endTime,
			isVisible,
			questions: selectedQuestions,
		}
		console.log(sendData)
	}

	return (
		<>
			<SearchModal
				placeholder={'Enunciado da Questao'}
				data={questions}
				isOpen={isModalOpen}
				multipleSelections={true}
				onClose={() => setIsModalOpen(false)}
				onSelection={(questionsData) => setSelectedQuestions(questionsData)}
			/>
			<Styled.Container>
				{loading ? (
					<div>
						<h2>Loading</h2>
					</div>
				) : (
					<>
						<Styled.Header>
							<h1>Criar Avalicao</h1>
						</Styled.Header>
						<Styled.Content>
							<form>
								<div className="input-container">
									<Styled.Input>
										<TextInput
											key="name"
											type="text"
											id="name"
											onChange={(e) => setName(e.target.value)}
											value={name}
											required={true}
											labelValue="Nome da Avalicao"
										/>
									</Styled.Input>
									<Styled.Input>
										<TextInput
											key="startTime"
											type="text"
											id="startTime"
											onChange={(e) => setStartTime(e.target.value)}
											value={startTime}
											required={true}
											labelValue="Horario do Comeco"
										/>
									</Styled.Input>
									<Styled.Input>
										<TextInput
											key="endTime"
											type="text"
											id="endTime"
											onChange={(e) => setEndTime(e.target.value)}
											value={endTime}
											required={true}
											labelValue="Horario do Fim"
										/>
									</Styled.Input>
								</div>
								<Styled.RadioContainer>
									<div className="header">
										<h4>Publico</h4>
									</div>
									<div className="button-container">
										<div>
											<input
												type={'radio'}
												name="visible"
												required
												value="true"
												id="true"
												checked={isVisible === 'true'}
												onChange={(e) => setVisible(e.target.value)}
											/>
											<label htmlFor="true">Sim</label>
										</div>
										<div>
											<input
												type={'radio'}
												name="visible"
												required
												value="false"
												id="false"
												checked={isVisible === 'false'}
												onChange={(e) => setVisible(e.target.value)}
											/>
											<label htmlFor="false">Nao</label>
										</div>
									</div>
								</Styled.RadioContainer>
								<Styled.ButtonContainer>
									<Button
										fontSize="18px"
										width="175px"
										onClick={(event) => handleOpenSearchModal(event)}
									>
										Selecionar Questao
									</Button>
								</Styled.ButtonContainer>
								<SelectedQuestions
									selectedQuestions={selectedQuestions}
									onScoreChange={handleScoreChange}
								/>
								<Styled.ButtonContainer>
									<Button
										// type='submit'
										fontSize="18px"
										width="175px"
										onClick={(event) => handleOnSubmit(event)}
									>
										Criar
									</Button>
								</Styled.ButtonContainer>
							</form>
						</Styled.Content>
					</>
				)}
			</Styled.Container>
		</>
	)
}
