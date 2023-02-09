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
export const Select = styled.div`
	width: 100%;
	font-size: 18px;
	border: none;
	border-radius: 20px;
	padding: 15px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	& .option {
		color: ${({ theme }) => theme.colors.primary};
		text-align: center;
		width: 300px;
		height: 35px;
		padding: 10px;
		border-radius: 15px;
		background-color: white;
	}
`
