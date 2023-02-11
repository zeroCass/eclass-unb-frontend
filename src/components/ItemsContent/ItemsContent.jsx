import { useMemo, useRef, useState } from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { RiAddCircleFill } from 'react-icons/ri'
import { SearchedItems } from '../SearchedItems'
import { Container } from './styles'

export const ItemsContent = ({
	contentArray,
	title,
	placeholder,
	ModalComponent,
	shouldHasModal,
	onOpenModal,
	itemButtons,
	questionsSelection,
}) => {
	const [text, setText] = useState('')
	const searchedArray = useMemo(() => {
		const lowerText = text.toLowerCase()
		return contentArray.filter((item) =>
			item.title.toLowerCase().includes(lowerText),
		)
	}, [text, contentArray])

	const timeoutRef = useRef(null)
	const delaySearch = 500 // (dado em ms)

	return (
		<Container>
			{ModalComponent}
			<h1>{title}</h1>
			<div className="search-bar">
				{questionsSelection}
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
				itemButtons={itemButtons}
			></SearchedItems>
			{shouldHasModal && (
				<div className="add-button-container">
					<button onClick={onOpenModal}>
						<RiAddCircleFill />
					</button>
				</div>
			)}
		</Container>
	)
}
