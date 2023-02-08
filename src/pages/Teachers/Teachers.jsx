import { Button } from '../../components/Button'
import { ItemList } from '../../components/ItemList/ItemList'
import { ItemsContent } from '../../components/ItemsContent'

export const Teachers = () => {
	return (
		<ItemsContent
			title={'Professores'}
			array={['Professor1', 'Professor2', 'Professor3']}
			placeholder={'Pesquise por professor'}
			itemFormat={(item, index) => (
				<li key={index}>
					<ItemList
						title={item}
						description="Matricula do Professor"
						buttonsComponents={[
							<Button
								key={0}
								onClick={() => console.log('Visualizando Professor')}
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
