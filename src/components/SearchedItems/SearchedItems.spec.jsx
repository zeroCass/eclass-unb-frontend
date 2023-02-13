import { cleanup, render } from '@testing-library/react'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { AuthProvider } from './contexts/AuthContext/context'
import { SearchedItems } from './SearchedItems'
import { theme } from './styles/theme'

afterEach(cleanup)

describe('SearchedItems component', () => {
	it('renders without crashing', () => {
		const searchedArray = [
			{
				title: 'Item 1',
				description: 'This is item 1',
				hasIcon: true,
				timeDate: '2022-01-01',
				dataItem: {},
			},
			{
				title: 'Item 2',
				description: 'This is item 2',
				hasIcon: false,
				timeDate: '2022-02-01',
				dataItem: {},
			},
		]
		const itemButtons = [
			{
				label: 'Edit',
				onClick: () => {},
			},
			{
				label: 'Delete',
				onClick: () => {},
			},
		]

		const { getByText } = render(
			<ThemeProvider theme={theme}>
				<AuthProvider>
					<SearchedItems
						searchedArray={searchedArray}
						itemButtons={itemButtons}
					/>
				</AuthProvider>
			</ThemeProvider>,
		)

		expect(getByText('Item 1')).toBeInTheDocument()
		expect(getByText('This is item 1')).toBeInTheDocument()
		expect(getByText('Item 2')).toBeInTheDocument()
		expect(getByText('This is item 2')).toBeInTheDocument()
		expect(getByText('Edit')).toBeInTheDocument()
		expect(getByText('Delete')).toBeInTheDocument()
	})
})
