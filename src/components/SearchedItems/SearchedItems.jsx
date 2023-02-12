import { Button } from '../Button'
import { ItemList } from '../ItemList'
import { Container } from './styles'

const ButtonsComponent = ({ itemButtons, dataItem }) => {
	return (
		<>
			{itemButtons &&
				itemButtons.map((button, index) => (
					<Button
						margin={'0 10px'}
						key={index}
						onClick={() => button.onClick(dataItem)}
					>
						{button.label}
					</Button>
				))}
		</>
	)
}

export const SearchedItems = ({ searchedArray, itemButtons }) => {
	return (
		// for earch array item, create a ItemList component and the buttons passed as parameters
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
								<ButtonsComponent
									dataItem={item?.dataItem}
									itemButtons={itemButtons}
								/>
							}
						/>
					))}
			</ul>
		</Container>
	)
}
