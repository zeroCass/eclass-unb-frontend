import { AiOutlineFileDone } from 'react-icons/ai'
import * as Styled from './styles'

export const ItemList = ({
	title,
	description,
	timeDate,
	hasIcon = false,
	hasDate = false,
	buttonsComponents,
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
				{buttonsComponents &&
					buttonsComponents.map((ButtonComponent, index) => (
						<div key={index} className="button-comp">
							{ButtonComponent}
						</div>
					))}
			</div>
		</Styled.Container>
	)
}
