import { ItemsContent } from '../../components/ItemsContent'

export const Subjects = () => {
	return (
		<div>
			<ItemsContent
				title={'Materias'}
				array={['Materia1', 'Materia2', 'Materia3']}
				placeholder={'Pesquise pela Materia'}
				itemFormat={(item, index) => <li key={index}>{item} teste</li>}
			></ItemsContent>
		</div>
	)
}
