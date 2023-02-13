import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import { Button } from './Button'
import * as Styled from './styles'

jest.mock('./styles', () => ({
	Button: jest.fn(({ children }) => <button>{children}</button>),
}))

describe('Button component', () => {
	it('renders the children', () => {
		const { getByText } = render(<Button>Click me</Button>)
		expect(getByText('Click me')).toBeInTheDocument()
	})

	it('calls the onClick prop when clicked', () => {
		const onClick = jest.fn()
		const { getByText } = render(<Button onClick={onClick}>Click me</Button>)
		fireEvent.click(getByText('Click me'))
		expect(onClick).toHaveBeenCalled()
	})

	it('sets the margin, padding, width, height, and fontSize correctly', () => {
		render(
			<Button
				margin="10px"
				padding="15px"
				width="200px"
				height="50px"
				fontSize="30px"
			>
				Click me
			</Button>,
		)
		expect(Styled.Button).toHaveBeenCalledWith(
			expect.objectContaining({
				margin: '10px',
				padding: '15px',
				width: '200px',
				height: '50px',
				fontSize: '30px',
			}),
			{},
		)
	})

	it('uses the default values for margin, padding, width, height, and fontSize when not provided', () => {
		render(<Button>Click me</Button>)
		expect(Styled.Button).toHaveBeenCalledWith(
			expect.objectContaining({
				margin: 0,
				padding: 0,
				width: '160px',
				height: '40px',
				fontSize: '23px',
			}),
			{},
		)
	})
})
