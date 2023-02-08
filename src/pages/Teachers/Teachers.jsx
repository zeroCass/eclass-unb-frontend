import { useContext } from 'react'
import { ItemsContent } from '../../components/ItemsContent'
import { AuthContext } from '../../contexts/AuthContext/context'
export const Teachers = () => {
	const authContext = useContext(AuthContext)
	const {
		authState: { userType },
	} = authContext
	return (
		<ItemsContent
			title={'Professores'}
			array={['Professor1', 'Professor2', 'Professor3']}
			placeholder={'Pesquise por professor'}
			showAddButton={userType === 0}
			itemFormat={(item, index) => <li key={index}>{item} teste</li>}
		/>
	)
}
