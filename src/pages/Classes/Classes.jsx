import { ItemList } from '../../components/ItemList/ItemList'
import { ItemsContent } from '../../components/ItemsContent'

export const Classes = () => {
	return (
		<section>
			<ItemsContent
				title={'Turmas'}
				array={['Turma1', 'Turma2', 'Turma3']}
				placeholder={'Pesquise pela turma'}
				itemFormat={(item, index) => (
					<li key={index}>
						{' '}
						<ItemList title={item} />
					</li>
				)}
			></ItemsContent>
		</section>
	)
}
