import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getData, postData, putDataById } from '../../api'
import { ItemsContent } from '../../components/ItemsContent'
import { AuthContext } from '../../contexts/AuthContext/context'
import { useAsync } from '../../hooks/useAsync'
import { FormClasses } from './components/FormClasses'

/*eslint-disable */
const fetchClasses = () => {
	return getData('classes')
}

const postClassData = (classData) => {
	return postData('classes', classData)
}

const subscribeToClass = async (classData, studentID) => {
	const newStudents = classData.students
	newStudents.push(studentID)
	console.log(newStudents)
	await putDataById('class', classData.id, { students: newStudents })
}

export const Classes = () => {
	const authContext = useContext(AuthContext)
	const {
		authState: { userType },
		authState,
	} = authContext

	const { execute, loading, data, error } = useAsync(fetchClasses)
	const navigate = useNavigate()
	const [isOpen, setIsOpen] = useState(false)
	const [formattedClassData, setFormattedClassData] = useState([])
	// determines if the addButon and the modal should show up
	const shouldHasModal = userType !== 3

	// calls the useAsync execute function
	useEffect(() => {
		execute()
	}, [execute])

	// return a formatted object
	useEffect(() => {
		if (data) {
			const newData = data.map((item) => {
				// set dataItem to correspond to the original data
				const dataItem = data.find((data) => data.id === item.id)

				//get the dates
				const startTime = new Date(item.startTime)
				const endTime = new Date(item.endTime)

				return {
					classID: item.id,
					title: `${item.subject.name} - ${item.name}`,
					description: `Professores: ${item?.teachers.map(
						(teacher) => teacher.name,
					)}`,
					timeDate: `${startTime.getHours()}: ${startTime.getMinutes()} as ${endTime.getHours()}: ${endTime.getMinutes()}`,
					dataItem,
				}
			})
			setFormattedClassData(newData)
		}
	}, [data])

	const isSubscribe = (classDetails) => {
		const checked = classDetails?.students.filter(
			(studentID) => studentID === authState.id,
		)
		return checked.length > 0
	}

	// create the buttons to the ItemList Component
	const itemButtons = [
		{
			label: 'Visualizar',
			onClick: (classDetails) =>
				navigate('/class-description', { state: classDetails }),
		},
	]

	userType === 3 &&
		itemButtons.push({
			label: 'Entrar',
			onClick: (classDetails) => {
				if (isSubscribe(classDetails)) {
					window.alert('Voce ja esta inscrito nessa turma')
				}
				if (!isSubscribe(classDetails)) {
					subscribeToClass(classDetails, authState.id)
					navigate('/class-description', { state: classDetails })
				}
			},
		})

	return (
		<section>
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
				// create the ItemsContent component with the Modal content
				<ItemsContent
					title={'Turmas'}
					contentArray={formattedClassData}
					placeholder={'Pesquise pela turma'}
					ModalComponent={
						shouldHasModal && (
							<FormClasses
								isOpen={isOpen}
								onClose={() => setIsOpen(false)}
								onSubmit={(classData) => {
									console.log(classData)
									postClassData(classData)
									setIsOpen(false)
								}}
							/>
						)
					}
					shouldHasModal={shouldHasModal}
					onOpenModal={() => setIsOpen(true)}
					itemButtons={itemButtons}
				></ItemsContent>
			)}
		</section>
	)
}
