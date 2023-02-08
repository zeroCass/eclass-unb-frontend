import styled from 'styled-components'
export const Container = styled.div`
	background-color: white;
	border-radius: 10px;
	margin-top: 30px;
	display: flex;
	width: 937px;
	height: 63px;

	& .icon {
		width: 55px;
		display: flex;
		/*border: 2px solid green;*/
	}

	.heading {
		text-align: center;
	}

	.info {
		width: 400px;
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		/*border: 2px solid yellow;*/
	}
	.info div {
		flex: 1;
	}

	.date {
		width: 200px;
		display: flex;
		/*border: 2px solid purple;*/
	}

	.end-content {
		padding: 5px;
		display: flex;
		align-items: flex-end;
		justify-content: flex-start;
	}

	.button-div{
		width: 468px;
		display: flex;
		flex-flow: row nowrap;
		justify-content: flex-end;
		align-items: center;
		/*border: 2px solid red;*/
	}

	.button-comp{
		padding: 5px;
		display: flex;
	}

	h3 {
		font-family: 'Poppins';
		font-style: normal;
		font-weight: 800;
		font-size: 18px;
		line-height: 27px;
		color: #494949;
	}

	h4 {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 21px;
		text-ali
		letter-spacing: 0.04em;
		color: ${({ theme }) => theme.colors.primary};
	}
`
