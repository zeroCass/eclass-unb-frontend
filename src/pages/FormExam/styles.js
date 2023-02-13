import styled from 'styled-components'

export const Container = styled.div`
	margin: 20px 0;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-items: center;
	align-items: center;
	flex-direction: column;
`

export const Header = styled.header`
	margin-bottom: 20px;
	width: 100%;
	& h1 {
		text-align: center;
		font-size: 26px;
	}
`

export const Content = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	background-color: #d9d9d9;
	width: 60%;
	min-height: 70vh;
	border-radius: 10px;
	padding: 3rem 0;
	border: 1px solid rgba(0, 0, 0, 0.2);
	& .input-container {
		width: 500px;
	}
`

export const Input = styled.div`
	padding: 5px;
	border-radius: 10px;
	border: 1px solid rgba(0, 0, 0, 0.2);
	margin: 10px 0;
`

export const RadioContainer = styled.div`
	width: 100%;
	& .header {
		width: 500px;
		text-align: center;
	}
	& .button-container {
		width: 500px;
		display: flex;
		justify-content: space-around;
		padding: 10px;
		font-weight: 400;
		font-size: 18px;
		line-height: 21px;
		letter-spacing: 0.04em;
		color: rgba(25, 51, 143, 0.8);
	}
	& .button-container label {
		margin-left: 5px;
	}
`
export const ButtonContainer = styled.div`
	margin: 20px 0;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`
