import { useContext, useState } from 'react'
import logo from '../../assets/svg/logoBlack.svg'
import { AuthSection } from '../../components/AuthSection'
import { TextInput } from '../../components/TextInput'
import { login } from '../../contexts/AuthContext/actions'
import { AuthContext } from '../../contexts/AuthContext/context'
import { ButtonsContainer } from './components/ButtonsContianer'

export const Login = () => {
	const authContext = useContext(AuthContext)
	const { authDispatch } = authContext

	const [registrationID, setRegistrationID] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = (event) => {
		event.preventDefault()
		login(authDispatch)
	}

	return (
		<AuthSection
			logo={logo}
			title={'LogIn'}
			handleSubmit={handleSubmit}
			buttonsContainer={<ButtonsContainer />}
			formComponents={[
				<TextInput
					key="registrationID"
					type="text"
					id="registrationID"
					onChange={(e) => setRegistrationID(e.target.value)}
					value={registrationID}
					required={true}
					labelValue="Matrícula"
				/>,
				<TextInput
					key="password"
					type="password"
					id="password"
					onChange={(e) => setPassword(e.target.value)}
					value={password}
					required={true}
					labelValue="Senha"
				/>,
			]}
		/>
	)
}
