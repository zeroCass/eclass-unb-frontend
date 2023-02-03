import { useState } from 'react'
import logo from '../../assets/svg/logoBlack.svg'
import { AuthSection } from '../../components/AuthSection'
import { TextInput } from '../../components/TextInput'
import { ButtonsContainer } from '../Register/components/ButtonsContainer'

export const ForgotPass = () => {
	const [emailOrRegistrationID, setEmailOrRegistrationID] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log('Submit')
	}

	const pInfo = `Para redefinir sua senha, preencha abaixo com sua matrícula
	ou e-mail. Um email será enviado para seu endereço de e-mail
	registrado no Eclass com as instruções de recuperação.`

	return (
		<AuthSection
			logo={logo}
			pInfo={pInfo}
			title={'Esqueci a senha'}
			handleSubmit={handleSubmit}
			buttonsContainer={<ButtonsContainer />}
			formComponents={[
				<TextInput
					key="emailOrRegistrationID"
					type="text"
					id="emailOrRegistrationID"
					onChange={(e) => setEmailOrRegistrationID(e.target.value)}
					value={emailOrRegistrationID}
					required={true}
					labelValue="E-mail ou Matrícula"
				/>,
			]}
		/>
	)
}
