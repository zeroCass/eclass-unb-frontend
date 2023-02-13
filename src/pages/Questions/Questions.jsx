import { useContext, useEffect, useState } from 'react'
import { getData } from '../../api'
import { ItemsContent } from '../../components/ItemsContent'
import { AuthContext } from '../../contexts/AuthContext/context'
import { QuestionDetails } from './components/QuestionDetails'
import { QuestionsForm } from './components/QuestionsForm'
import { QuestionsRadio } from './components/QuestionsRadio'

/* eslint-disable */
export const Questions = () => {
	const authContext = useContext(AuthContext)
	const {
		authState: { userType },
	} = authContext

	// state to handle fetch logic
	const [data, setData] = useState([])
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(false)

	const [isOpenDetails, setIsOpenDetails] = useState(false) // constrol modal details
	const [questionDetails, setQuestionDetails] = useState(null) // state that is used by questionDetails

	const [isOpen, setIsOpen] = useState(false)
	const [formattedQuestions, setFormattedQuestions] = useState([])
	const [questionType, setQuestionType] = useState('discursive')
	const shouldHasModal = userType !== 3

	// load the data accordingly with the questionType
	const fetchQuestions = async () => {
		const url =
			questionType === 'discursive'
				? 'discursive-questions'
				: 'multiple-questions'
		return getData(url)
	}

	// handle the logic to calls the fetch data when mount and questionType changes
	useEffect(() => {
		setLoading(true)
		fetchQuestions()
			.then((res) => setData(res))
			.catch((err) => setError(err.message || 'error!!!'))
			.finally(() => setLoading(false))
	}, [questionType])

	// create the formatted data to display in ItemContent component
	useEffect(() => {
		if (data) {
			const newData = data.map((item) => {
				// set dataItem to correspond to the original data
				const dataItem = data.find((data) => data.id === item.id)
				return {
					title: item.statement,
					description: `Professor: ${item.teacher}`,
					dataItem,
				}
			})
			setFormattedQuestions(newData)
		}
	}, [data])

	// create the buttons array object to pass to the ItemList component
	const itemButtons = [
		{
			label: 'Visualizar',
			onClick: (dataItem) => {
				// set the question Details and then open the modal passing the question deatils
				setQuestionDetails(dataItem)
				setIsOpenDetails(true)
			},
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
				<>
					{
						<QuestionDetails
							isOpen={isOpenDetails}
							questionDetails={questionDetails}
							onClose={() => setIsOpenDetails(false)}
						/>
					}
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
				</>
			)}
		</>
	)
}
