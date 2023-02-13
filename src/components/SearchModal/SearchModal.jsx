import { useEffect, useState } from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { Button } from '../Button'
import { Modal } from '../Modal'
import * as Styled from './styles'

export const SearchModal = ({
	isOpen,
	onClose,
	onSelection,
	placeholder,
	searchIsAvailable = true,
	multipleSelections = false,
	data,
}) => {
	const [searchTerm, setSearchTerm] = useState('')
	const [filteredData, setFilteredData] = useState(data)
	const [dataList, setDataList] = useState(data)
	const [selectedData, setSelectedData] = useState([])

	// search effect
	useEffect(() => {
		setFilteredData(
			dataList.filter((item) =>
				item.name.toLowerCase().includes(searchTerm.toLowerCase()),
			),
		)
	}, [searchTerm, dataList])

	// update state when recieve data changes
	useEffect(() => {
		setFilteredData(data)
		setDataList(data)
	}, [data])

	const handleSelection = (item) => {
		if (!multipleSelections) {
			setSelectedData(item)
			setDataList([item, ...dataList.filter((d) => d.id !== item.id)])
			return
		}

		let newSelectedData = [...selectedData]
		const itemIndex = newSelectedData.findIndex((d) => d.id === item.id)
		if (itemIndex === -1) {
			newSelectedData.push(item)
		} else {
			newSelectedData.splice(itemIndex, 1)
		}
		setSelectedData(newSelectedData)
		setDataList([item, ...dataList.filter((d) => d.id !== item.id)])
	}

	const handleOk = () => {
		onClose()
		onSelection(selectedData)
	}

	const seletedEffect = (item) => {
		if (!multipleSelections) {
			return selectedData?.id === item.id ? 'selected' : ''
		}
		for (const selected of selectedData) {
			if (selected.id === item.id) {
				return 'selected'
			}
		}
		return ''
	}

	if (!isOpen) return null

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<Styled.Container>
				{searchIsAvailable && (
					<Styled.Search>
						<input
							type="text"
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							placeholder={placeholder}
						/>
						<BiSearchAlt className="icon-search"></BiSearchAlt>
					</Styled.Search>
				)}
				<Styled.ItemsContainer>
					<div>
						{filteredData.map((item) => (
							<div
								className={`item-list
								${seletedEffect(item)}`}
								onClick={() => handleSelection(item)}
								key={item.id}
							>
								{item.name}
							</div>
						))}
					</div>
				</Styled.ItemsContainer>

				<Styled.ButtonsContainer>
					<Button onClick={handleOk} margin-={''}>
						OK
					</Button>
				</Styled.ButtonsContainer>
			</Styled.Container>
		</Modal>
	)
}
