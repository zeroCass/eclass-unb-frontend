import { useContext } from 'react'
import { Button } from '../../components/Button'
import { ItemList } from '../../components/ItemList/ItemList'
import { ItemsContent } from '../../components/ItemsContent'
import { AuthContext } from '../../contexts/AuthContext/context'
import { QuestionsForm } from './components/QuestionsForm'

export const Questions = () => {
	const authContext = useContext(AuthContext)
	const {
		authState: { userType },
	} = authContext
	return (
		<div>
			<ItemsContent
				title={'Questoes'}
				array={[
					'Questão 1: Este é um exemplo de um possível enunciado de questão no futuro. Está destinado a mostrar como uma questão pode ser formulada e apresentada a alguém para responder...',
					'Questão 2: Este é um exemplo de um possível enunciado de questão no futuro. Está destinado a mostrar como uma questão pode ser formulada e apresentada a alguém para responder...',
					'Questão 3: Este é um exemplo de um possível enunciado de questão no futuro. Está destinado a mostrar como uma questão pode ser formulada e apresentada a alguém para responder...',
				]}
				placeholder={'Pesquise pela questao'}
				showAddButton={userType !== 2}
				modalContent={
					<QuestionsForm
						onSubmit={(data) => console.log('Questao criada', data)}
					/>
				}
				itemFormat={(item, index) => (
					<li key={index}>
						<ItemList
							title={item}
							description="Professor : Nome do Professor"
							buttonsComponents={[<Button key={0}>Visualizar</Button>]}
						/>
					</li>
				)}
			></ItemsContent>
		</div>
	)
}
