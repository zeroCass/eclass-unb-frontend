import { useContext, useEffect, useState } from 'react'
import { getData } from '../../api'
import { ItemsContent } from '../../components/ItemsContent'
import { UserForm } from '../../components/UserForm'
import { AuthContext } from '../../contexts/AuthContext/context'
import { useAsync } from '../../hooks/useAsync'

const fetchStudents = () => {
	return getData('students')
}

export const Students = () => {
	const authContext = useContext(AuthContext)
	const {
		authState: { userType },
	} = authContext

	const { execute, loading, data, error } = useAsync(fetchStudents)
	const [isOpen, setIsOpen] = useState(false)
	const [formattedStudents, setFormattedStudents] = useState([])
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
					description: item.email,
					dataItem,
				}
			})
			setFormattedStudents(newData)
		}
	}, [data])

	const itemButtons = [
		{
			label: 'Visualizar',
			onClick: () => console.log('Visualizar Aluno'),
		},
	]

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
				<ItemsContent
					title={'Estudantes'}
					contentArray={formattedStudents}
					placeholder={'Pesquise por estudante'}
					ModalComponent={
						shouldHasModal && (
							<UserForm
								title={'Cadastrar Estudante'}
								isOpen={isOpen}
								userType={3}
								onClose={() => setIsOpen(false)}
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
