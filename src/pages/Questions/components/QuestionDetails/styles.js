import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	padding: 20px;

	display: flex;
	align-items: center;
	flex-direction: column;

	& .header {
		position: absolute
		width: 80%;

		display: flex;
		align-items: center;

		h3 {
			margin: 5px;
			font-family: 'Roboto';
			font-style: normal;
			font-weight: 400;
			font-size: 15px;
			line-height: 21px;
			text-align: center;
			letter-spacing: 0.04em;

			color: #1e1e1e;
		}
	}

	& .quest-div {
		display: flex;
		flex-flow: row wrap;

		h4 {
			font-family: 'Poppins';
			font-style: normal;
			font-weight: 500;
			font-size: 32px;
			line-height: 48px;
			text-align: center;

			color: #494949;
		}
	}

	.answer {
		width: 100%;
		margin-top: 10px;
		padding: 10px;

		border: 1px solid rgba(0, 0, 0, 0.2);
		border-radius: 10px;
	}
`
export const AnswerButton = styled.button`
	margin: 20px 0px;
	padding: 5px;
	display: flex;
	align-items: center;
	align-content: center;
	flex-direction: row;

	background: rgba(217, 217, 217, 0.81);
	box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5);
	border-radius: 10px;
	border: 1px solid rgba(0, 0, 0, 0.2);

	.icon {
		width: 20px;

		display: flex;
		align-items: center;

		color: ${({ theme }) => theme.colors.primary};
	}

	h4 {
		margin-right: 30%;
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 400;
		font-size: 20px;
		line-height: 23px;
		letter-spacing: 0.04em;

		color: ${({ theme }) => theme.colors.primary};
	}
`
