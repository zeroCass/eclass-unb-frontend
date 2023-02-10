import { useContext, useState } from 'react'
import { Button } from '../../components/Button/styles'
import { Modal } from '../../components/Modal/Modal'
import { AuthContext } from '../../contexts/AuthContext/context'
import { Image, Info, PageContainer } from './components/PerfilContainer'

export const Perfil = () => {
	const authContext = useContext(AuthContext)
	const { authState } = authContext

	// modal state
	const [isOpen, setIsOpen] = useState(false)

	return (
		<PageContainer>
			<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}></Modal>
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
						key={0}
						onClick={() => setIsOpen(true)}
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
							key={0}
							onClick={() => setIsOpen(true)}
						>
							Notas
						</Button>
					)}
					<Button
						margin={'30px'}
						width={'50%'}
						height={'55px'}
						fontSize={'18px'}
						key={0}
						onClick={() => setIsOpen(true)}
					>
						Questões
					</Button>
					<Button
						margin={'30px'}
						width={'50%'}
						height={'55px'}
						fontSize={'18px'}
						key={0}
						onClick={() => setIsOpen(true)}
					>
						Avaliações
					</Button>
				</div>
			</div>
		</PageContainer>
	)
}
