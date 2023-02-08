import { useContext } from 'react'
import { Button } from '../../components/Button'
import { ItemList } from '../../components/ItemList/ItemList'
import { ItemsContent } from '../../components/ItemsContent'
import { AuthContext } from '../../contexts/AuthContext/context'

export const Subjects = () => {
	const authContext = useContext(AuthContext)
	const { authState } = authContext

	const buttonsComponents = [<Button key={0}>Visualizar</Button>]
	buttonsComponents.push(
		authState.userType === 1 ? <Button key={1}>Vincular-se</Button> : [],
	)

	return (
		<div>
			<ItemsContent
				title={'Materias'}
				array={['Materia1', 'Materia2', 'Materia3']}
				placeholder={'Pesquise pela Materia'}
				showAddButton={authState.userType === 0}
				itemFormat={(item, index) => (
					<li key={index}>
						<ItemList
							title={item}
							description="Periodo X"
							buttonsComponents={buttonsComponents}
						/>
					</li>
				)}
			></ItemsContent>
		</div>
	)
}
