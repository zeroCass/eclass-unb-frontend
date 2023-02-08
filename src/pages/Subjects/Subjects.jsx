import { ItemList } from '../../components/ItemList'
import { ItemsContent } from '../../components/ItemsContent'

export const Subjects = () => {
	return (
		<div>
			<ItemsContent
				title={'Materias'}
				array={['Materia1', 'Materia2', 'Materia3']}
				placeholder={'Pesquise pela Materia'}
				itemFormat={(item, index) => (
					<li key={index}>
						<ItemList
							title={item}
							description="Periodo X"
							buttonText="Vizualizar"
						/>
					</li>
				)}
			></ItemsContent>
		</div>
	)
}
