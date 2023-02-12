import styled from 'styled-components'

export const ModalsPerfil = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 100%;
	& .title {
		width: 90%;
		h3 {
			margin-bottom: 5px;
			text-align: center;
			font-family: 'Poppins';
			font-style: normal;
			font-weight: 500;
			font-size: 20px;
		}
	}

	& .info-div {
		margin: 5px;
		display: flex;
		width: 95%;
		align-items: center;
	}

	li {
		margin-left: 20px;
	}
`
export const MyClass = styled.div`
	display: flex;
	align-items: center;

	padding: 5px;
	width: 100%;
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 10px;

	h3 {
		font-family: 'Poppins';
		font-style: normal;
		font-weight: 100%;
		font-size: 20px;
		line-height: 30px;
		color: #494949;
	}
`
