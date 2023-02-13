import { render } from '@testing-library/react'
import React from 'react'
import { MainLayout } from './MainLayout'

test('MainLayout component should render', () => {
	const { getByTestId } = render(<MainLayout />)
	const mainLayout = getByTestId('main-layout')
	expect(mainLayout).toBeInTheDocument()
})
