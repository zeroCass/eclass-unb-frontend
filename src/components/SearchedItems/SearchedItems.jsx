import { Container } from './styles'

export const SearchedItems = ({ searchedArray, itemFormat }) => {
	return (
		<Container>
			<ul>{searchedArray && searchedArray.map(itemFormat)}</ul>
		</Container>
	)
}
