import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import { Modal } from './Modal'

describe('Modal component', () => {
	it('should render correctly when isOpen is true', () => {
		/*ERRO*/
		const { getByTestId, queryByTestId } = render(
			<Modal isOpen={true} onClose={() => {}}>
				<div data-testid="modal-content">Modal Content</div>
			</Modal>,
		)

		expect(getByTestId('modal-content')).toBeInTheDocument()
		expect(queryByTestId('back-button')).toBeInTheDocument()
	})

	it('should not render when isOpen is false', () => {
		const { queryByTestId } = render(
			<Modal isOpen={false} onClose={() => {}}>
				<div data-testid="modal-content">Modal Content</div>
			</Modal>,
		)

		expect(queryByTestId('modal-content')).not.toBeInTheDocument()
	})

	it('should call onClose when clicking on the overlay', () => {
		/*ERRO*/
		const onClose = jest.fn()
		const { getByTestId } = render(
			<Modal isOpen={true} onClose={onClose}>
				<div data-testid="modal-content">Modal Content</div>
			</Modal>,
		)

		fireEvent.click(getByTestId('overlay'))
		expect(onClose).toHaveBeenCalledTimes(1)
	})

	it('should call onClose when clicking on the back button', () => {
		/*ERRO*/
		const onClose = jest.fn()
		const { getByTestId } = render(
			<Modal isOpen={true} onClose={onClose}>
				<div data-testid="modal-content">Modal Content</div>
			</Modal>,
		)

		fireEvent.click(getByTestId('back-button'))
		expect(onClose).toHaveBeenCalledTimes(1)
	})

	it('should not render the back button when backButton is false', () => {
		/*ERRO*/
		const { queryByTestId } = render(
			<Modal isOpen={true} onClose={() => {}} backButton={false}>
				<div data-testid="modal-content">Modal Content</div>
			</Modal>,
		)

		expect(queryByTestId('back-button')).not.toBeInTheDocument()
	})
})
