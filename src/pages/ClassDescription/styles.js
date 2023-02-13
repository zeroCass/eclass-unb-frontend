import styled from 'styled-components'

export const Container = styled.section`
	position: relative;
	width: 100vw;
	height: auto;
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

	.add-button-container {
		z-index: 1;
		position: absolute;
		left: 120px;
		bottom: 0;
		width: auto;
		height: auto;
	}
	.add-button-container button {
		font-size: 50px;
		border: none;
		background: none;
		color: ${({ theme }) => theme.colors.primary};
	}
`

export const ListSection = styled.section`
	background-color: #d9d9d9;
	width: 90%;
	min-height: 70vh;
	border-radius: 10px;
	padding: 3rem 0;
	border: 1px solid rgba(0, 0, 0, 0.2);
	ul {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		list-style: none;
	}
	& .error {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`
