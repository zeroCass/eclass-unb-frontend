import { Button } from '../../components/Button'
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
