import { ItemsContent } from '../../components/ItemsContent'
export const Teachers = () => {
	return (
		<ItemsContent
			title={'Professores'}
			array={['Professor1', 'Professor2', 'Professor3']}
			placeholder={'Pesquise por professor'}
			itemFormat={(item, index) => <li key={index}>{item} teste</li>}
		/>
	)
}
