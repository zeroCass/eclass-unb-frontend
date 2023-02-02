import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import { Register } from '.'
import { AuthProvider } from '../../contexts/AuthContext'

// setup the element to render corretly
const renderRegister = () => {
	return render(
		<BrowserRouter>
			<AuthProvider>
				<Register />
			</AuthProvider>
		</BrowserRouter>,
	)
}

describe('<Register/>', () => {
	beforeEach(() => {
		renderRegister()
	})

	it('should has render properly', () => {
		const nameInput = screen.getByLabelText('Nome e Sobrenome')
		expect(nameInput).toBeInTheDocument()

		const emailInput = screen.getByLabelText('E-mail')
		expect(emailInput).toBeInTheDocument()

		const cpfInput = screen.getByLabelText('CPF')
		expect(cpfInput).toBeInTheDocument()

		const studentOption = screen.getByRole('radio', { name: 'Aluno' })
		expect(studentOption).toBeInTheDocument()

		const teacherOption = screen.getByRole('radio', { name: 'Professor' })
		expect(teacherOption).toBeInTheDocument()

		const sendButton = screen.getByRole('button', {
			name: 'Enviar',
		})
		expect(sendButton).toBeInTheDocument()

		const backButton = screen.getByRole('button', {
			name: 'Voltar',
		})
		expect(backButton).toBeInTheDocument()
	})

	it('should has "Zezim da Silva" on "Nome e Sobrenome" input', () => {
		const nameInput = screen.getByLabelText('Nome e Sobrenome')
		userEvent.type(nameInput, 'Zezim da Silva')
		expect(nameInput.value).toBe('Zezim da Silva')
	})

	it('should has "zezim@email.com" on "E-mail" input', () => {
		const emailInput = screen.getByLabelText('E-mail')
		userEvent.type(emailInput, 'zezim@email.com')
		expect(emailInput.value).toBe('zezim@email.com')
	})

	it('should has "10100000001" on "CPF" input', () => {
		const cpfInput = screen.getByLabelText('CPF')
		userEvent.type(cpfInput, '10100000001')
		expect(cpfInput.value).toBe('10100000001')
	})

	it('requires one radio button to be selected', () => {
		const studentOption = screen.getByRole('radio', { name: 'Aluno' })
		const teacherOption = screen.getByRole('radio', { name: 'Professor' })

		userEvent.click(studentOption)
		expect(studentOption.checked).toBe(true)
		expect(teacherOption.checked).toBe(false)

		userEvent.click(teacherOption)
		expect(studentOption.checked).toBe(false)
		expect(teacherOption.checked).toBe(true)
	})
})
