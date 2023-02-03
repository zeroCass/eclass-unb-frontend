import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import { ForgotPass } from '.'
import { AuthProvider } from '../../contexts/AuthContext'

// setup the element to render corretly
const renderForgotPass = () => {
	return render(
		<BrowserRouter>
			<AuthProvider>
				<ForgotPass />
			</AuthProvider>
		</BrowserRouter>,
	)
}

describe('<ForgotPass/>', () => {
	beforeEach(() => {
		renderForgotPass()
	})

	it('should has render properly', () => {
		const input = screen.getByLabelText('E-mail ou Matrícula')
		expect(input).toBeInTheDocument()

		const sendButton = screen.getByRole('button', {
			name: 'Enviar',
		})
		expect(sendButton).toBeInTheDocument()

		const backButton = screen.getByRole('button', {
			name: 'Voltar',
		})
		expect(backButton).toBeInTheDocument()
	})

	it('should has "zezim@email" on "E-mail ou Matrícula" input', () => {
		const input = screen.getByLabelText('E-mail ou Matrícula')
		userEvent.type(input, 'zezim@email')
		expect(input.value).toBe('zezim@email')
	})

	it('should has "123456789" on "E-mail ou Matrícula" input', () => {
		const input = screen.getByLabelText('E-mail ou Matrícula')
		userEvent.type(input, '123456789')
		expect(input.value).toBe('123456789')
	})
})
