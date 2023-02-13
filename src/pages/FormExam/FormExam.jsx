/* eslint-disable */
import { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getDatabyID, postData } from '../../api'
import { Button } from '../../components/Button'
import { SearchModal } from '../../components/SearchModal'
import { TextInput } from '../../components/TextInput'
import { AuthContext } from '../../contexts/AuthContext/context'
import { SelectedQuestions } from './SelectedQuestions/SelectedQuestions'
import * as Styled from './styles'

const onSubmit = (data) => {
	postData('exams', data)
}

export const FormExam = () => {
	const authContext = useContext(AuthContext)
	const { authState } = authContext

	const location = useLocation()
	const classDetails = location.state
	const navigate = useNavigate()

	const [name, setName] = useState('')
	const [startAt, setStartAt] = useState(new Date())
	const [endAt, setEndAt] = useState(new Date())
	const [isVisible, setVisible] = useState('true')

	// state to handle fetch logic
	const [loading, setLoading] = useState(false)

	const [questions, setQuestions] = useState([])
	const [selectedQuestions, setSelectedQuestions] = useState([])
	const [isModalOpen, setIsModalOpen] = useState(false)

	const fetchQuestions = async () => {
		const teacherData = await getDatabyID('teacher', authState.id)
		const dissertativeQuestion = teacherData.discursiveQuestions
		const multipleQuestions = teacherData.multipleQuestions
		return [...dissertativeQuestion, ...multipleQuestions]
	}

	// load teachers questions on mount
	useEffect(() => {
		setLoading(true)
		fetchQuestions()
			.then((res) => {
				const formattedData = res.map((question) => {
					return {
						...question,
						name: question.statement,
						questionType: question.option1
							? 'multipleChoice'
							: 'dissertative',
					}
				})
				setQuestions(formattedData)
			})
			.catch((err) => window.alert(err))
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
		const multipleQuestions = selectedQuestions
			.filter((question) => {
				if (question.questionType === 'multipleChoice') return question.id
			})
			.map((question) => question.id)
		const discursiveQuestions = selectedQuestions
			.filter((question) => {
				if (question.questionType === 'dissertative') return question.id
			})
			.map((question) => question.id)
		const sendData = {
			name,
			isVisible: isVisible === 'true',
			startAt,
			endAt,
			score: 0.0,
			students: [],
			teacher: authState.id,
			classe: classDetails.classID,
			multipleQuestions,
			discursiveQuestions,
		}
		console.log(sendData)
		onSubmit(sendData)
		navigate('/classes')
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
											key="startAt"
											type="text"
											id="startAt"
											onChange={(e) => setStartAt(e.target.value)}
											value={startAt}
											required={true}
											labelValue="Horario do Comeco"
										/>
									</Styled.Input>
									<Styled.Input>
										<TextInput
											key="endAt"
											type="text"
											id="endAt"
											onChange={(e) => setEndAt(e.target.value)}
											value={endAt}
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
