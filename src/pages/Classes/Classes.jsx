import { ItemList } from '../../components/ItemList/ItemList'
import { ItemsContent } from '../../components/ItemsContent'

export const Classes = () => {
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
				itemFormat={(item, index) => (
					<li key={index}>
						{' '}
						<ItemList
							title={item}
							description="Professor : Nome do Professor"
							hasDate
							timeDate="horario: hh:mm as hh:mm"
							buttonText="Entrar"
						/>
					</li>
				)}
			></ItemsContent>
		</section>
	)
}
