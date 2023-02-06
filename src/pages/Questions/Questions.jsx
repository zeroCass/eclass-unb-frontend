import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext/context'
import { ItemsContent } from '../../components/ItemsContent'

export const Questions = () => {
	const authContext = useContext(AuthContext)
	/* eslint-disable no-unused-vars */
	const { authState, authDispatch } = authContext
	return (
		<div>
			<ItemsContent
				title={'Questoes'}
				array={['Questao1', 'Questao2', 'Questao3']}
				placeholder={'Pesquise pela questao'}
				itemFormat={(item, index) => <li key={index}>{item} teste</li>}
			></ItemsContent>
		</div>
	)
}
