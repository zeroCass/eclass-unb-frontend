import { useContext, useEffect, useState } from 'react'
import { ItemsContent } from '../../components/ItemsContent'
import { AuthContext } from '../../contexts/AuthContext/context'
import { useAsync } from '../../hooks/useAsync'
import { FormClasses } from './components/FormClasses'

const fetchData = async () => {
	return new Promise((resolve) => {
		setTimeout(async () => {
			const res = await fetch('./classes.json')
			const data = await res.json()
			resolve(data)
		}, 2000)
	})
}

export const Classes = () => {
	const authContext = useContext(AuthContext)
	const {
		authState: { userType },
	} = authContext

	const { execute, loading, data, error } = useAsync(fetchData)
	const [isOpen, setIsOpen] = useState(false)
	const [formattedClassData, setFormattedClassData] = useState([])
	const shouldHasModal = userType !== 2

	useEffect(() => {
		execute()
	}, [execute])

	useEffect(() => {
		if (data) {
			const newData = data.map((item) => ({
				title: item.className,
				description: `Professor: ${item.teacherName}`,
				timeDate: `${item.startTime} as ${item.endTime}`,
			}))
			setFormattedClassData(newData)
		}
	}, [data])

	const itemButtons = [
		{
			label: 'Entrar',
			onClick: () => console.log('Entrou em Turmas'),
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
					title={'Turmas'}
					contentArray={formattedClassData}
					placeholder={'Pesquise pela turma'}
					ModalComponent={
						shouldHasModal && (
							<FormClasses
								isOpen={isOpen}
								onClose={() => setIsOpen(false)}
								onSubmit={(data) => {
									console.log(data)
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
