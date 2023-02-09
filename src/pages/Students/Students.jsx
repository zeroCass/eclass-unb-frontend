import { useContext } from 'react'
import { Button } from '../../components/Button'
import { ItemList } from '../../components/ItemList/ItemList'
import { ItemsContent } from '../../components/ItemsContent'
import { UserForm } from '../../components/UserForm'
import { AuthContext } from '../../contexts/AuthContext/context'

export const Students = () => {
	const authContext = useContext(AuthContext)
	const {
		authState: { userType },
	} = authContext

	return (
		<ItemsContent
			title={'Estudantes'}
			showAddButton={userType === 0}
			array={['Nome do Aluno 1', 'Nome do Aluno 2', 'Nome do Aluno 3']}
			placeholder={'Pesquise por estudante'}
			modalContent={
				<UserForm
					title={'Cadastrar Estudante'}
					userType={2}
					onSubmit={() => console.log('Estudante cadastrado')}
				/>
			}
			itemFormat={(item, index) => (
				<li key={index}>
					<ItemList
						title={item}
						description="Matricula do Aluno"
						buttonsComponents={[
							<Button
								key={0}
								onClick={() => console.log('Visualizando aluno')}
								margin={'0'}
							>
								Visualizar
							</Button>,
						]}
					/>
				</li>
			)}
		/>
	)
}
