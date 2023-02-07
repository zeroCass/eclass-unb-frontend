import styled from 'styled-components'
import logo from '../../assets/svg/logo.svg'
import userIcon from '../../assets/svg/user-icon.svg'

export const Header = styled.header`
	top: 0;
	position: sticky;
	z-index: 1;
	display: flex;
	background-color: #19338f;
	color: black;
	width: 100vw;
	height: 110px;
	justify-content: space-between;
	box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.5);
	& a {
		text-decoration: none;
	}
`

export const PagesContainer = styled.div`
	display: flex;
	height: 100%;
`

export const PagesList = styled.ul`
	display: flex;
	height: 100%;
	list-style: none;
	& li {
		width: 140px;
		display: flex;
		border-right: 1px solid #6e6e6e;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		color: white;
		font-size: 40px;
	}
	& li span {
		margin-top: 8px;
		font-family: Neucha, sans-serif;
		font-size: 16px;
		text-decoration: none;
		color: white;
	}

	& li .logo {
		background-image: url(${logo});
		background-size: 150%;
		background-position: -8% -2%;
		background-repeat: no-repeat;
		width: 110px;
		height: 110px;
	}
`

export const UserContainer = styled.div`
	display: flex;
	height: 100%;
`

export const UserList = styled.ul`
	display: flex;
	height: 100%;
	color: white;
	font-family: Neucha, sans-serif;
	list-style: none;
	& li {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	& .user-name-type {
		display: flex;
		flex-direction: column;
		color: white;
		font-family: Neucha, sans-serif;
	}
	& .user-name-type h1 {
		font-size: 16px;
		font-weight: bold;
	}
	& .user-name-type span {
		font-size: 14px;
	}
	& .user-photo div {
		background-image: url(${userIcon});
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
		width: 80px;
		height: 80px;
		border-radius: 50%;
		margin: 0 15px;
	}
	& button {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-right: 40px;
		background: transparent;
		border: none;
		outline: none;
		cursor: pointer;
		color: white;
		font-size: 32px;
	}
	& button span {
		margin-top: 5px;
		font-size: 14px;
	}
`
