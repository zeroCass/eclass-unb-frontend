import { useContext } from 'react'
import { ItemsContent } from '../../components/ItemsContent'
import { AuthContext } from '../../contexts/AuthContext/context'
export const Students = () => {
	const authContext = useContext(AuthContext)
	const {
		authState: { userType },
	} = authContext
	return (
		<ItemsContent
			title={'Estudantes'}
			array={['Estudantes1', 'Estudantes2', 'Estudantes3']}
			showAddButton={userType === 0}
			placeholder={'Pesquise por estudante'}
			itemFormat={(item, index) => <li key={index}>{item} teste</li>}
		/>
	)
}
