import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import { Login } from '.'
import { AuthProvider } from '../../contexts/AuthContext'

// setup the element to render corretly
const renderLogin = () => {
	return render(
		<BrowserRouter>
			<AuthProvider>
				<Login />
			</AuthProvider>
		</BrowserRouter>,
	)
}

describe('<Login/>', () => {
	beforeEach(() => {
		renderLogin()
	})

	it('should has render properly', () => {
		const registrationInput = screen.getByLabelText('Matrícula')
		expect(registrationInput).toBeInTheDocument()

		const passwordInput = screen.getByLabelText('Senha')
		expect(passwordInput).toBeInTheDocument()

		const loginButton = screen.getByRole('button', { name: 'Login' })
		expect(loginButton).toBeInTheDocument()

		const requestRigesterLink = screen.getByRole('link', {
			name: 'Solicitar Cadastro',
		})
		expect(requestRigesterLink).toBeInTheDocument()

		const forgotPasswordLink = screen.getByRole('link', {
			name: 'Esqueci a Senha',
		})
		expect(forgotPasswordLink).toBeInTheDocument()
	})

	it('should has 123456 on Matricula input', () => {
		const registrationInput = screen.getByLabelText('Matrícula')
		userEvent.type(registrationInput, '123456')
		expect(registrationInput.value).toBe('123456')
	})

	it('should has my_secrete_pass on Senha input', () => {
		const passwordInput = screen.getByLabelText('Senha')
		userEvent.type(passwordInput, 'my_screte_pass')
		expect(passwordInput.value).toBe('my_screte_pass')
	})
})
