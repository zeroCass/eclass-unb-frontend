import { AiOutlineFileDone } from 'react-icons/ai'
import { Button } from '../Button'
import * as Styled from './styles'

export const ItemList = ({
	title,
	description,
	timeDate,
	buttonText,
	hasIcon = false,
	hasDate,
	hasTwoButtons = false,
}) => {
	return (
		<Styled.Container>
			{hasIcon && (
				<div className="icon">
					<AiOutlineFileDone size={50}></AiOutlineFileDone>
				</div>
			)}

			<div className="text">
				<div className="heading">
					<h3>{title}</h3>
				</div>
				<div className="info">
					<div className="end-text">
						<h4>{description}</h4>
					</div>
					{hasDate && (
						<div className="end-text">
							<h4>{timeDate}</h4>
						</div>
					)}
				</div>
			</div>

			<div className="button-div">
				{hasTwoButtons && (
					<div className="button-comp">
						<Button margin={'0'}>Teste</Button>
					</div>
				)}
				<div className="button-comp">
					<Button margin={'0'}>{buttonText}</Button>
				</div>
			</div>
		</Styled.Container>
	)
}
