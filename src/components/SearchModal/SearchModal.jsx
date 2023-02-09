import { useEffect, useState } from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { Button } from '../Button'
import { Modal } from '../Modal'
import * as Styled from './styles'

export const SearchModal = ({ isOpen, onClose, onSelection, data }) => {
	const [searchTerm, setSearchTerm] = useState('')
	const [filteredData, setFilteredData] = useState(data)
	const [dataList, setDataList] = useState(data)
	const [selectedData, setSelectedData] = useState(null)

	// search effect
	useEffect(() => {
		setFilteredData(
			dataList.filter((item) =>
				item.name.toLowerCase().includes(searchTerm.toLowerCase()),
			),
		)
	}, [searchTerm, dataList])

	const handleSelection = (item) => {
		setSelectedData(item)
		setDataList([item, ...dataList.filter((d) => d.id !== item.id)])
	}

	const handleOk = () => {
		onClose()
		onSelection(selectedData)
	}

	if (!isOpen) return null

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<Styled.Container>
				<Styled.Search>
					<input
						type="text"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						placeholder={'Nome da Materia'}
					/>
					<BiSearchAlt className="icon-search"></BiSearchAlt>
				</Styled.Search>
				<Styled.ItemsContainer>
					<div>
						{filteredData.map((item) => (
							<div
								className={`item-list
								${selectedData?.id === item.id ? 'selected' : ''}`}
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
