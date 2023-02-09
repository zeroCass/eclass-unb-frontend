import styled from 'styled-components'

export const Overlay = styled.div`
	z-index: 1000;
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	background-color: rgba(0, 0, 0, 0.7);
`

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	width: 100%;
	padding: 15px 15px 0 0;
	& button {
		background: none;
		border: none;
		color: black;
		font-size: 30px;
	}
`

export const Modal = styled.div`
	z-index: 1000;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: ${({ width }) => width || 'auto'};
	height: ${({ height }) => height || 'auto'};
	min-height: 200px;
	min-width: 300px;
	background-color: #d9d9d9;
	border-radius: 15px;
`
