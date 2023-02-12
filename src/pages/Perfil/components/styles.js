import styled from 'styled-components'
import userIcon from '../../../assets/svg/user-icon.svg'

export const PageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 60px;

	& .perfil-box {
		display: flex;
		flex: 1;
		flex-direction: row;
		align-items: center;
		background-color: #d9d9d9;
		width: 90%;
		min-height: 50vh;
		border-radius: 10px;
		padding: 5%;
		border: 1px solid rgba(0, 0, 0, 0.2);
	}

	& .buttons-div {
		width: 50%;
		max-height: 50%;
		display: flex;
		flex-direction: column;
		align-items: center;
		border-radius: 10px;
		border: 1px solid rgba(0, 0, 0, 0.2);
	}

	& .perfil-div {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 50%;
	}

	.info-div {
		margin: 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 90%;
		background: #ffffff;
		border-radius: 10px;
	}
`
export const Image = styled.div`
	background-image: url(${userIcon});
	background-size: cover;
	padding: 5%;
	width: 230px;
	height: 230px;
	display: flex;
	justify-content: center;
	align-items: center;
`
export const Info = styled.div`
	padding: 20px;
	p {
		text-align: center;
		margin-bottom: 10px;
		font-size: 20px;
	}
`
