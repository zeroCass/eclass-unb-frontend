import { useContext } from 'react'
import { Button } from '../../components/Button/styles'
import { AuthContext } from '../../contexts/AuthContext/context'

import { Image, Info, PageContainer } from './components/PerfilContainer'

export const Perfil = () => {
	const authContext = useContext(AuthContext)
	const { authState } = authContext

	return (
		<PageContainer>
			<div className="perfil-box">
				<div className="perfil-div">
					<Image />
					<Info className="info-div">
						<p>Name: {authState.name}</p>
						<p>Email: {authState.email}</p>
						<p>Matricula: {authState.registrationID}</p>
					</Info>
					<Button
						margin={'30px'}
						width={'50%'}
						height={'55px'}
						fontSize={'18px'}
					>
						Alterar Senha
					</Button>
				</div>
				<div className="buttons-div">
					{authState.userType === 2 && (
						<Button
							margin={'30px'}
							width={'50%'}
							height={'55px'}
							fontSize={'18px'}
						>
							Notas
						</Button>
					)}
					<Button
						margin={'30px'}
						width={'50%'}
						height={'55px'}
						fontSize={'18px'}
					>
						Questões
					</Button>
					<Button
						margin={'30px'}
						width={'50%'}
						height={'55px'}
						fontSize={'18px'}
					>
						Avaliações
					</Button>
				</div>
			</div>
		</PageContainer>
	)
}
