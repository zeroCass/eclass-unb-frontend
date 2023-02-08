import { AiOutlineFileDone } from 'react-icons/ai'
import { Button } from '../Button'
import * as Styled from './styles'

export const ItemList = ({
	title,
	hasIcon = false,
	hasDate = false,
	hasTwoButtons = false,
}) => {
	return (
		<Styled.Container>
			{hasIcon && (
				<div className="icon">
					<AiOutlineFileDone size={50}></AiOutlineFileDone>
				</div>
			)}

			<div className="info">
				<div className="heading">
					<h3>{title}</h3>
				</div>
				<div className="end-content">
					<h4>descrição random</h4>
				</div>
			</div>

			{hasDate && (
				<div className="date">
					<div className="end-content">
						<h4>dd/mm/aa hh:mm</h4>
					</div>
				</div>
			)}

			<div className="button-div">
				{hasTwoButtons && (
					<div className="button-comp">
						<Button margin={'0'}>Teste</Button>
					</div>
				)}
				<div className="button-comp">
					<Button margin={'0'}>Entrar</Button>
				</div>
			</div>
		</Styled.Container>
	)
}
