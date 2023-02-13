import styled from 'styled-components'

export const Container = styled.div`
	margin-top: 15px;
	width: 500px;
	background-color: white;
	border: none;
	border-radius: 20px;
	padding: 10px;
	& input {
		color: white;
		font-size: 18px;
		padding: 10px;
		width: 100px;
		background-color: ${({ theme }) => theme.colors.primary};
		border: none;
		border-radius: 20px;
	}
	& .statement,
	& .answer {
		width: 90%;
		padding: 15px;
	}
	& .statement span,
	& .answer span {
		font-size: 18px;
		font-weight: bold;
		color: ${({ theme }) => theme.colors.primary};
	}

	& .answer {
		background-color: #d9d9d9;
		border-radius: 20px;
		border: none;
	}
`
