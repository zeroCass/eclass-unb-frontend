/* eslint-disable */
import { useContext, useEffect, useState } from 'react'
import { getData, putDataById } from '../../api'
import { ItemsContent } from '../../components/ItemsContent'
import { AuthContext } from '../../contexts/AuthContext/context'
import { useAsync } from '../../hooks/useAsync'
import { SubjectsForm } from './components/SubjectsForm/SubjectsForm'

const fetchSubjects = () => {
	return getData('subjects')
}

const subscribeToSubject = (subjectID, teacherData) => {
	const subjects = teacherData.subjects
	subjects.push(subjectID)
	console.log(subjects, teacherData)
	putDataById('teacher', teacherData.id, { subjects: subjects })
}

export const Subjects = () => {
	const authContext = useContext(AuthContext)
	const {
		authState: { userType },
		authState,
	} = authContext

	const { execute, loading, data, error } = useAsync(fetchSubjects)
	const [isOpen, setIsOpen] = useState(false)
	const [formattedSubjectsData, setFormattedSubjectsData] = useState([])
	const shouldHasModal = userType === 1

	useEffect(() => {
		execute()
	}, [execute])

	useEffect(() => {
		if (data) {
			const newData = data.map((item) => {
				const dataItem = data.find((data) => data.id === item.id)
				return {
					title: item.name,
					description: item.description,
					dataItem,
				}
			})
			setFormattedSubjectsData(newData)
		}
	}, [data])

	const itemButtons = [
		{
			label: 'Visualizar',
			onClick: (subjectData) => console.log('visualizar', subjectData),
		},
	]
	// if the user is a teacher, then extra button is rendered
	userType === 2 &&
		itemButtons.push({
			label: 'Vincular-se',
			onClick: (subjectData) => {
				subscribeToSubject(subjectData.id, authState)
			},
		})

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
					title={'Materias'}
					placeholder={'Pesquise pela Materia'}
					contentArray={formattedSubjectsData}
					ModalComponent={
						shouldHasModal && (
							<SubjectsForm
								isOpen={isOpen}
								onClose={() => setIsOpen(false)}
							/>
						)
					}
					shouldHasModal={shouldHasModal}
					onOpenModal={() => setIsOpen(true)}
					itemButtons={itemButtons}
				/>
			)}
		</>
	)
}
