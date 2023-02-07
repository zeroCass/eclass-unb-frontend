/* eslint-disable */
import ReactDOM from 'react-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import * as Styled from './style'

export const Modal = ({
	isOpen,
	onClose,
	width,
	height,
	children,
	backButton = true,
}) => {
	if (!isOpen) return null

	return ReactDOM.createPortal(
		<>
			<Styled.Overlay onClick={onClose}>
				<Styled.Modal
					width={width}
					height={height}
					onClick={(e) => e.stopPropagation()}
				>
					{backButton && (
						<Styled.ButtonContainer>
							<button onClick={onClose}>
								<AiOutlineArrowLeft />
							</button>
						</Styled.ButtonContainer>
					)}
					{children}
				</Styled.Modal>
			</Styled.Overlay>
		</>,
		document.getElementById('portal'),
	)
}
