import { useContext, useEffect, useState } from 'react'
import { ItemsContent } from '../../components/ItemsContent'
import { AuthContext } from '../../contexts/AuthContext/context'
import { useAsync } from '../../hooks/useAsync'
import { SubjectsForm } from './components/SubjectsForm/SubjectsForm'

const fetchData = async () => {
	return new Promise((resolve) => {
		setTimeout(async () => {
			const res = await fetch('./subjects.json')
			const data = await res.json()
			resolve(data)
		}, 2000)
	})
}

export const Subjects = () => {
	const authContext = useContext(AuthContext)
	const {
		authState: { userType },
	} = authContext

	const { execute, loading, data, error } = useAsync(fetchData)
	const [isOpen, setIsOpen] = useState(false)
	const [formattedSubjectsData, setFormattedSubjectsData] = useState([])
	const shouldHasModal = userType === 0

	useEffect(() => {
		execute()
	}, [execute])

	useEffect(() => {
		if (data) {
			const newData = data.map((item) => ({
				title: item.subjectName,
				description: item.course,
			}))
			setFormattedSubjectsData(newData)
		}
	}, [data])

	const itemButtons = [
		{
			label: 'Entrar',
			onClick: () => console.log('Entrou em Turmas'),
		},
	]
	// if the user is a teacher, then extra button is rendered
	userType === 1 &&
		itemButtons.push({
			label: 'Vincular-se',
			onClick: () => console.log('Vinculou-se em Turma'),
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
