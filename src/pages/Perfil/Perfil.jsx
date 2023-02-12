import { useContext, useState } from 'react'
import { Button } from '../../components/Button/styles'
import { Modal } from '../../components/Modal/Modal'
import { AuthContext } from '../../contexts/AuthContext/context'
import { ModalContent } from './components/ModalContent/ModalContent'
import * as Styled from './components/styles'

export const Perfil = () => {
	const authContext = useContext(AuthContext)
	const { authState } = authContext
	const [isOpen, setIsOpen] = useState(false)
	const [modalContent, setModalContent] = useState('')

	const renderButton = (text) => (
		<Button
			margin={'30px'}
			width={'50%'}
			height={'55px'}
			fontSize={'18px'}
			key={text}
			onClick={() => {
				setModalContent(text)
				setIsOpen(true)
			}}
		>
			{text}
		</Button>
	)

	return (
		<section>
			<Styled.PageContainer>
				<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
					{ModalContent(modalContent)}
				</Modal>
				<div className="perfil-box">
					<div className="perfil-div">
						<Styled.Image />
						<Styled.Info className="info-div">
							<p>Name: {authState.name}</p>
							<p>Email: {authState.email}</p>
							<p>Matricula: {authState.registrationID}</p>
						</Styled.Info>
						{renderButton('Alterar Senha')}
					</div>
					<div className="buttons-div">
						{authState.userType != 0 && renderButton('Minhas Turmas')}
						{authState.userType === 2 && renderButton('Notas')}
						{renderButton('Questões')}
						{renderButton('Avaliações')}
					</div>
				</div>
			</Styled.PageContainer>
		</section>
	)
}
