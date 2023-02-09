import styled from 'styled-components'

export const Container = styled.div`
	padding: 20px;
	width: 400px;
	height: 450px;
	font-size: 18px;
`

export const ItemsContainer = styled.div`
	width: 100%;
	height: 75%;
	overflow-y: scroll;
	& .item-list {
		padding: 15px;
		border-bottom: 1px solid #aaa;
		margin-bottom: 10px;
	}
	& .item-list.selected {
		background-color: ${({ theme }) => theme.colors.primary};
		color: white;
	}
`

export const Search = styled.div`
	position: relative;
	width: 100%;
	margin-bottom: 15px;
	& input {
		width: 100%;
		height: 30px;
		font-size: 18px;
		border-radius: 10px;
		border: none;
		padding: 5px;
	}
	& .icon-search {
		position: absolute;
		right: 7px;
		top: 7px;
	}
`

export const ButtonsContainer = styled.div`
	margin-top: 15px;
	display: flex;
	justify-content: center;
	align-items: center;
`
