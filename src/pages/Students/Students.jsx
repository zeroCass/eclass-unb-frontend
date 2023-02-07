import { ItemsContent } from '../../components/ItemsContent'
export const Students = () => {
	return (
		<ItemsContent
			title={'Estudantes'}
			array={['Estudantes1', 'Estudantes2', 'Estudantes3']}
			placeholder={'Pesquise por estudante'}
			itemFormat={(item, index) => <li key={index}>{item} teste</li>}
		/>
	)
}
