import styled from 'styled-components'
export const Container = styled.div`
	padding: 10px;
	background-color: white;
	border-radius: 10px;
	margin-top: 30px;
	display: flex;
	width: 1000px;
	gap: 5px;

	& .icon {
		width: 55px;
		display: flex;
		align-items: center;
	}

	.heading {
		text-align: flex-start;
		display: flex;
		flex-wrap: wrap;
	}

	& .text {
		display: flex;
		flex: 1;
		flex-direction: column;
		flex-wrap: nowrap;
	}
	& .text div {
		flex: 1;
	}

	.info {
		width: 100%;
		display: flex;
		flex-flow: row nowrap;
	}

	.end-text {
		width: 50%;
		display: flex;
		flex-flow: row nowrap;
		align-items: flex-end;
		justify-content: flex-start;
		margin-top: 5px;
	}

	.button-div {
		display: flex;
		flex-flow: row nowrap;
		justify-content: flex-end;
		align-items: center;
	}

	.button-comp {
		padding: 5px;
		display: flex;
	}

	h3 {
		font-family: 'Poppins';
		font-style: normal;
		font-weight: 800;
		font-size: 20px;
		line-height: 27px;
		color: #494949;
	}

	h4 {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 21px;
		letter-spacing: 0.04em;
		color: ${({ theme }) => theme.colors.primary};
	}
`
