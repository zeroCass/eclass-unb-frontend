import styled from 'styled-components'

export const Container = styled.section`
	width: 100vw;
	height: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	& .header {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	& .header h1 {
		margin: 2rem 0 1rem 0;
		font-family: Neucha, sans-serif;
		font-size: 26px;
	}
	& .header .description {
		width: 500px;
		font-size: 20px;
		color: #969393;
		text-align: center;
	}

	& .content {
		width: 100%;
		margin: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	& .buttons-div {
		width: 100%;

		display: flex;
		justify-content: center;
		align-items: center;
	}
`

export const ListQuestions = styled.section`
	width: 90%;
	min-height: 70vh;
	border-radius: 10px;
	padding: 20px;

	display: flex;
	flex-direction: column;

	border: 1px solid rgba(0, 0, 0, 0.2);
	background-color: #d9d9d9;

	& .component {
		width: 100%;
		padding: 10px;
		margin-bottom: 30px;
		border: 1px solid rgba(0, 0, 0, 0.2);
		border-radius: 30px;

		display: flex;
		flex-direction: column;
	}

	.question {
		padding: 10px;
		display: flex;
		flex-direction: row;
	}

	.name {
		padding: 10px;
		weight: 20%;
		margin-right: 10px;
		background: #e6e6e6;
		border-radius: 10px;

		h3 {
			font-family: 'Inter';
			font-style: normal;
			font-weight: 400;
			font-size: 18px;
			line-height: 22px;
			text-align: center;
			color: #1e1e1e;
		}
	}

	.statement {
		display: flex;
		align-items: stretch;
		weight: 80%;
		padding: 10px;
		background: #ffffff;
		border-radius: 10px;

		h3 {
			font-family: 'Poppins';
			font-style: normal;
			font-weight: 800;
			font-size: 18px;
			line-height: 27px;
			color: #494949;
		}
	}

	.form-div form input[type='Resposta'] {
		display: flex;
		align-items: flex-start;
		width: 100%;
		margin: 5px 0px;
		padding: 10px;

		border: 2px solid #bababa;
		border-radius: 10px;
		background: #bababa;

		font-family: 'Roboto';
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 21px;
		letter-spacing: 0.04em;
		color: ${({ theme }) => theme.colors.primary};
	}
`
