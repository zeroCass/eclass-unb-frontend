import styled from 'styled-components'

export const Container = styled.div`
	padding: 15px;
	width: 500px;
	margin-bottom: 15px;
	height: auto;
	max-height: 860px;
	overflow-y: auto;
	& form div {
		margin-top: 20px;
	}
	& div.button-container {
		margin-top: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`
export const Header = styled.div`
	text-align: center;
	& h3 {
		font-size: 22px;
	}
`

export const TextArea = styled.div`
	width: 100%;
	& textarea {
		padding: 10px;
		width: 100%;
		margin: 10px 0;
		background-color: #d9d9d9;
		font-size: 18px;
		border-color: rgba(0, 0, 0, 0.5);
		border-radius: 15px;
		color: ${({ theme }) => theme.colors.primary};
	}
`

export const RadioContainer = styled.div`
	display: flex;
	justify-content: space-around;
	padding: 10px;
	font-weight: 400;
	font-size: 18px;
	line-height: 21px;
	letter-spacing: 0.04em;
	color: rgba(25, 51, 143, 0.8);

	& label {
		margin-left: 5px;
	}
`
