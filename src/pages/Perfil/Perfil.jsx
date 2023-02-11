import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button/styles'
import { Modal } from '../../components/Modal/Modal'
import { AuthContext } from '../../contexts/AuthContext/context'
import { Image, Info, PageContainer } from './components/PerfilContainer'

export const Perfil = () => {
	const authContext = useContext(AuthContext)
	const { authState } = authContext
	const [isOpen, setIsOpen] = useState(false)

	const renderButton = (text) => (
		<Button
			margin={'30px'}
			width={'50%'}
			height={'55px'}
			fontSize={'18px'}
			key={0}
			onClick={() => setIsOpen(true)}
		>
			{text}
		</Button>
	)

	return (
		<section>
			<PageContainer>
				<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
					<div>
						<h3>
							<Link to="/class-description">Ir para Turma X</Link>
						</h3>
					</div>
				</Modal>
				<div className="perfil-box">
					<div className="perfil-div">
						<Image />
						<Info className="info-div">
							<p>Name: {authState.name}</p>
							<p>Email: {authState.email}</p>
							<p>Matricula: {authState.registrationID}</p>
						</Info>
						{renderButton('Alterar Senha')}
					</div>
					<div className="buttons-div">
						{authState.userType != 0 && renderButton('Minhas Turmas')}
						{authState.userType === 2 && renderButton('Notas')}
						{renderButton('Questões')}
						{renderButton('Avaliações')}
					</div>
				</div>
			</PageContainer>
		</section>
	)
}
