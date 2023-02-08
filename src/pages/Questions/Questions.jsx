import { useContext } from 'react'
import { ItemList } from '../../components/ItemList/ItemList'
import { ItemsContent } from '../../components/ItemsContent'
import { AuthContext } from '../../contexts/AuthContext/context'

export const Questions = () => {
	const authContext = useContext(AuthContext)
	/* eslint-disable no-unused-vars */
	const { authState, authDispatch } = authContext
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
				itemFormat={(item, index) => (
					<li key={index}>
						{' '}
						<ItemList
							title={item}
							description="Professor : Nome do Professor"
							buttonText="Vizualizar"
						/>
					</li>
				)}
			></ItemsContent>
		</div>
	)
}
