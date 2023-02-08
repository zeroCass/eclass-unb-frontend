import styled from 'styled-components'
export const Container = styled.div`
	background-color: white;
	border-radius: 10px;
	margin-top: 30px;
	display: flex;
	width: 1000px;
	/*height: 65px;*/

	& .icon {
		width: 55px;
		display: flex;
		align-items: center;
		/*border: 2px solid blue;*/
	}

	.heading {
		text-align: flex-start;
		display: flex;
		flex-wrap: wrap;
		/*border: 2px solid green;*/
	}

	& .text {
		width: 600px;
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		/*border: 2px solid orange;*/
	}
	& .text div {
		flex: 1;
	}

	.info {
		width: 600px;
		display: flex;
		flex-flow: row nowrap;
		/*border: 2px solid purple;*/
	}

	.end-text {
		width: 300px;
		display: flex;
		flex-flow: row nowrap;
		align-items: flex-end;
		justify-content: flex-start;
		/*border: 2px solid pink;*/
	}

	.button-div{
		width: 400px;
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
		align-items: center;
		/*border: 2px solid red;*/
	}

	.button-comp{
		padding: 5px;
		display: flex;
		/*border: 2px solid brown;*/
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
