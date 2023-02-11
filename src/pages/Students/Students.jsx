import { useContext, useEffect, useState } from 'react'
import { getData, postData } from '../../api'
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
	const shouldHasModal = userType !== 2

	useEffect(() => {
		execute()
	}, [execute])

	useEffect(() => {
		if (data) {
			const newData = data.map((item) => ({
				title: item.name,
				description: item.email,
			}))
			setFormattedStudents(newData)
		}
	}, [data])

	const itemButtons = [
		{
			label: 'Visualizar',
			onClick: () => console.log('Visualizar Aluno'),
		},
	]

	const registerStudent = async (data) => {
		try {
			const response = await postData('students', data)
			console.log(response.data)
			execute() // calls useAsync()
		} catch (err) {
			console.log(err.data)
		}
		setIsOpen(false)
	}

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
								userType={2}
								onClose={() => setIsOpen(false)}
								onSubmit={(data) => {
									registerStudent(data)
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
