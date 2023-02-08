import { Button } from '../../components/Button'
import { ItemList } from '../../components/ItemList/ItemList'
import { ItemsContent } from '../../components/ItemsContent'

export const Students = () => {
	return (
		<ItemsContent
			title={'Estudantes'}
			array={['Nome do Aluno 1', 'Nome do Aluno 2', 'Nome do Aluno 3']}
			placeholder={'Pesquise por estudante'}
			itemFormat={(item, index) => (
				<li key={index}>
					<ItemList
						title={item}
						description="Matricula do Aluno"
						buttonsComponents={[
							<Button
								key={0}
								onClick={() => console.log('Visualizando Aluno')}
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
