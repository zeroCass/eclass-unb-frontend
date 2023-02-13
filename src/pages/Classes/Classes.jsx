import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ItemsContent } from '../../components/ItemsContent'
import { AuthContext } from '../../contexts/AuthContext/context'
import { useAsync } from '../../hooks/useAsync'
import { FormClasses } from './components/FormClasses'

const fetchData = async () => {
	return new Promise((resolve) => {
		setTimeout(async () => {
			const res = await fetch('./classesDescription.json')
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
				const dataItem = data.find((data) => data.classID === item.classID)
				return {
					classID: item.classID,
					title: item.className,
					description: `Professor: ${item.teacherName}`,
					timeDate: `${item.startTime} as ${item.endTime}`,
					dataItem,
				}
			})
			setFormattedClassData(newData)
		}
	}, [data])

	// create the buttons to the ItemList Component
	const itemButtons = [
		{
			label: 'Entrar',
			onClick: (item) => navigate('/class-description', { state: item }),
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
