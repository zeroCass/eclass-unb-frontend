/* eslint-disable */
import { useContext, useState } from 'react'
import logo from '../../assets/svg/logoBlack.svg'
import { AuthSection } from '../../components/AuthSection'
import { TextInput } from '../../components/TextInput'
import { login } from '../../contexts/AuthContext/actions'
import { AuthContext } from '../../contexts/AuthContext/context'
import { ButtonsContainer } from './components/ButtonsContianer'

export const Login = () => {
	// const { execute, loading, data, error } = useAsync(handleSubmit)
	const authContext = useContext(AuthContext)
	const { authDispatch } = authContext

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = (event) => {
		event.preventDefault()
		login(authDispatch, {
			email,
			password,
		})
	}

	return (
		<>
			<AuthSection
				logo={logo}
				title={'LogIn'}
				handleSubmit={handleSubmit}
				buttonsContainer={<ButtonsContainer />}
				formComponents={[
					<TextInput
						key="email"
						type="text"
						id="email"
						onChange={(e) => setEmail(e.target.value)}
						value={email}
						required={true}
						labelValue="Email"
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
		</>
	)
}
