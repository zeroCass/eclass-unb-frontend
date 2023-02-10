import { useContext, useState } from 'react'
import { Button } from '../../components/Button'
import { ItemList } from '../../components/ItemList/ItemList'
import { ItemsContent } from '../../components/ItemsContent'
import { Modal } from '../../components/Modal/'
import { AuthContext } from '../../contexts/AuthContext/context'
import { FormClasses } from './components/FormClasses'

export const Classes = () => {
	const authContext = useContext(AuthContext)
	const {
		authState: { userType },
	} = authContext

	const [isOpen, setIsOpen] = useState(false)
	const showAddButton = userType !== 2

	return (
		<section>
			<ItemsContent
				title={'Turmas'}
				array={[
					'Nome da Materia - Turma 1',
					'Nome da Materia - Turma 2',
					'Nome da Materia - Turma 3',
				]}
				placeholder={'Pesquise pela turma'}
				ModalComponent={
					<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
						<FormClasses
							onSubmit={(data) => {
								console.log(data)
								setIsOpen(false)
							}}
						/>
					</Modal>
				}
				shouldOpenModal={showAddButton}
				onOpenModal={() => setIsOpen(true)}
				itemFormat={(item, index) => (
					<li key={index}>
						<ItemList
							title={item}
							description="Professor : Nome do Professor"
							hasDate={true}
							timeDate="horario: hh:mm as hh:mm"
							buttonsComponents={[
								<Button
									key={0}
									onClick={() => console.log('Entrou em Turmas')}
									margin={'0'}
								>
									Entrar
								</Button>,
							]}
						/>
					</li>
				)}
			></ItemsContent>
		</section>
	)
}
