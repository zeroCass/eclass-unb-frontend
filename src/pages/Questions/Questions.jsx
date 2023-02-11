import { useContext, useEffect, useState } from 'react'
import { ItemsContent } from '../../components/ItemsContent'
import { AuthContext } from '../../contexts/AuthContext/context'
import { QuestionsForm } from './components/QuestionsForm'
import { QuestionsRadio } from './components/QuestionsRadio'

/* eslint-disable */
export const Questions = () => {
	const authContext = useContext(AuthContext)
	const {
		authState: { userType },
	} = authContext

	const [data, setData] = useState([])
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(false)

	const [isOpen, setIsOpen] = useState(false)
	const [formattedQuestions, setFormattedQuestions] = useState([])
	const [questionType, setQuestionType] = useState('discursive')
	const shouldHasModal = userType !== 2

	console.log('renderizou', questionType)

	const fetchData = async () => {
		const url =
			questionType === 'discursive'
				? './questions.json'
				: './questionsMC.json'
		console.log(url)
		return new Promise((resolve) => {
			setTimeout(async () => {
				const res = await fetch(url)
				const data = await res.json()
				resolve(data)
			}, 2000)
		})
	}

	useEffect(() => {
		console.log('useEffect')
		setLoading(true)
		fetchData()
			.then((res) => setData(res))
			.catch((err) => setError(err.message || 'error!!!'))
			.finally(() => setLoading(false))
	}, [questionType])

	useEffect(() => {
		if (data) {
			const newData = data.map((item) => ({
				title: item.statement,
				description: `Professor: ${item.teacherName}`,
			}))
			setFormattedQuestions(newData)
		}
	}, [data])

	const itemButtons = [
		{
			label: 'Visualizar',
			onClick: () => console.log('Visualizou questao'),
		},
	]

	return (
		<>
			{loading && (
				<div>
					<h2>LOADING...</h2>
				</div>
			)}
			{error && (
				<div>
					<h2>ERROR: {error}</h2>
				</div>
			)}
			{!loading && !error && (
				<ItemsContent
					title={'Questoes'}
					contentArray={formattedQuestions}
					placeholder={'Pesquise pela questao'}
					ModalComponent={
						shouldHasModal && (
							<QuestionsForm
								isOpen={isOpen}
								onClose={() => setIsOpen(false)}
							/>
						)
					}
					shouldHasModal={shouldHasModal}
					onOpenModal={() => setIsOpen(true)}
					itemButtons={itemButtons}
					questionsSelection={
						<QuestionsRadio
							questionType={questionType}
							setQuestionType={(type) => setQuestionType(type)}
						/>
					}
				/>
			)}
		</>
	)
}
