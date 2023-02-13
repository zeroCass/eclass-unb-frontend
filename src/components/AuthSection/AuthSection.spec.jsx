import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { AuthSection } from './AuthSection'

describe('AuthSection', () => {
	it('renders the logo, title, and form', () => {
		const handleSubmit = jest.fn()
		const formComponents = <input type="text" />
		const buttonsContainer = <button>Submit</button>

		render(
			<AuthSection
				logo="logo.png"
				title="Sign In"
				handleSubmit={handleSubmit}
				formComponents={formComponents}
				buttonsContainer={buttonsContainer}
			/>,
		)

		expect(screen.getByAltText('e-class logo')).toHaveAttribute(
			'src',
			'logo.png',
		)
		expect(screen.getByText('Sign In')).toBeInTheDocument()
		expect(screen.getByRole('textbox')).toBeInTheDocument()
		expect(screen.getByText('Submit')).toBeInTheDocument()
	})

	it('submits the form when the submit button is clicked', () => {
		const handleSubmit = jest.fn()
		const formComponents = <input type="text" />
		const buttonsContainer = <button>Submit</button>

		render(
			<AuthSection
				logo="logo.png"
				title="Sign In"
				handleSubmit={handleSubmit}
				formComponents={formComponents}
				buttonsContainer={buttonsContainer}
			/>,
		)

		fireEvent.click(screen.getByText('Submit'))

		expect(handleSubmit).toHaveBeenCalled()
	})

	it('renders the optional pInfo component', () => {
		const handleSubmit = jest.fn()
		const formComponents = <input type="text" />
		const buttonsContainer = <button>Submit</button>

		render(
			<AuthSection
				logo="logo.png"
				title="Sign In"
				handleSubmit={handleSubmit}
				formComponents={formComponents}
				buttonsContainer={buttonsContainer}
				pInfo="Hello, welcome back!"
			/>,
		)

		expect(screen.getByText('Hello, welcome back!')).toBeInTheDocument()
	})

	it('renders the optional othersComponents component', () => {
		const handleSubmit = jest.fn()
		const formComponents = <input type="text" />
		const buttonsContainer = <button>Submit</button>
		const othersComponents = <p>Forgot password?</p>

		render(
			<AuthSection
				logo="logo.png"
				title="Sign In"
				handleSubmit={handleSubmit}
				formComponents={formComponents}
				buttonsContainer={buttonsContainer}
				othersComponents={othersComponents}
			/>,
		)

		expect(screen.getByText('Forgot password?')).toBeInTheDocument()
	})
})
