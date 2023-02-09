import styled from 'styled-components'

export const Container = styled.div`
	padding: 15px;
	width: 500px;
	margin-bottom: 15px;
	height: auto;
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
