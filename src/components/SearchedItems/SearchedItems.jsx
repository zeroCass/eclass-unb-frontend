import { Button } from '../Button'
import { ItemList } from '../ItemList'
import { Container } from './styles'

const ButtonsComponent = ({ itemButtons }) => {
	return (
		<>
			{itemButtons &&
				itemButtons.map((button, index) => (
					<Button margin={'0 10px'} key={index} onClick={button.onClick}>
						{button.label}
					</Button>
				))}
		</>
	)
}

export const SearchedItems = ({ searchedArray, itemButtons }) => {
	return (
		<Container>
			<ul>
				{searchedArray &&
					searchedArray.map((item, index) => (
						<ItemList
							key={index}
							title={item?.title}
							description={item?.description}
							hasIcon={item?.hasIcon}
							timeDate={item?.timeDate}
							buttonsComponents={
								<ButtonsComponent itemButtons={itemButtons} />
							}
						/>
					))}
			</ul>
		</Container>
	)
}
