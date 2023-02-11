import { useContext, useEffect, useState } from 'react'
import { ItemsContent } from '../../components/ItemsContent'
import { UserForm } from '../../components/UserForm'
import { AuthContext } from '../../contexts/AuthContext/context'
import { useAsync } from '../../hooks/useAsync'

const fetchData = async () => {
	return new Promise((resolve) => {
		setTimeout(async () => {
			const res = await fetch('./teachers.json')
			const data = await res.json()
			resolve(data)
		}, 2000)
	})
}

export const Teachers = () => {
	const authContext = useContext(AuthContext)
	const {
		authState: { userType },
	} = authContext

	const { execute, loading, data, error } = useAsync(fetchData)
	const [isOpen, setIsOpen] = useState(false)
	const [formattedTeachers, setFormattedTeachers] = useState([])
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
			setFormattedTeachers(newData)
		}
	}, [data])

	const itemButtons = [
		{
			label: 'Visualizar',
			onClick: () => console.log('Visualizar Professor'),
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
					title={'Professores'}
					contentArray={formattedTeachers}
					placeholder={'Pesquise por professor(a)'}
					ModalComponent={
						shouldHasModal && (
							<UserForm
								title={'Cadastrar Professor(a)'}
								isOpen={isOpen}
								userType={1}
								onClose={() => setIsOpen(false)}
								onSubmit={() => {
									console.log('Enviado')
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
