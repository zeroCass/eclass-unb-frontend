import { useContext, useState } from 'react'
import logo from '../../assets/svg/logoSmall.svg'
import { AuthSection } from '../../components/AuthSection'
import { TextInput } from '../../components/TextInput'
import { AuthContext } from '../../contexts/AuthContext/context'
import { ButtonsContainer } from './components/ButtonsContainer'
import { RadioButtons } from './components/RadioButtons'

export const Register = () => {
	const authContext = useContext(AuthContext)
	/* eslint-disable */
	const { authDispatch } = authContext

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [cpf, setCpf] = useState('')

	return (
		<AuthSection
			logo={logo}
			title={'Solicitar Cadastro'}
			buttonsContainer={<ButtonsContainer />}
			othersComponents={<RadioButtons />}
			formComponents={[
				<TextInput
					key="name"
					type="text"
					id="name"
					onChange={(e) => setName(e.target.value)}
					value={name}
					required={true}
					labelValue="Nome e Sobrenome"
				/>,
				<TextInput
					key="email"
					type="email"
					id="email"
					onChange={(e) => setEmail(e.target.value)}
					value={email}
					required={true}
					labelValue="E-mail"
				/>,
				<TextInput
					key="cpf"
					type="cpf"
					id="cpf"
					onChange={(e) => setCpf(e.target.value)}
					value={cpf}
					required={true}
					labelValue="CPF"
				/>,
			]}
		/>
	)
}
