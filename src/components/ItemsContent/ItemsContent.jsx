import { useMemo, useRef, useState } from 'react'
import { Container } from './styles'
import { BiSearchAlt } from 'react-icons/bi'
import { SearchedItems } from '../SearchedItems'

export const ItemsContent = ({ array, title, placeholder, itemFormat }) => {
	const [text, setText] = useState('')
	const searchedArray = useMemo(() => {
		const lowerText = text.toLowerCase()
		return array.filter((item) => item.toLowerCase().includes(lowerText))
	}, [text, array])

	const timeoutRef = useRef(null)
	const delaySearch = 500 // (dado em ms)

	return (
		<Container>
			<h1>{title}</h1>
			<div className="searchBar">
				<input
					placeholder={placeholder}
					onChange={(event) => {
						window.clearTimeout(timeoutRef.current)
						timeoutRef.current = window.setTimeout(() => {
							setText(event.target.value)
						}, delaySearch)
					}}
				></input>
				<BiSearchAlt className="icon-search"></BiSearchAlt>
			</div>
			<SearchedItems
				searchedArray={searchedArray}
				itemFormat={itemFormat}
			></SearchedItems>
		</Container>
	)
}
