import styled from 'styled-components'

export const TextField = styled.div`
	margin: 10px 0;
	position: relative;
	height: 40px;
	border-bottom: 2px solid #adadad;
	& label {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		color: rgba(25, 51, 143, 0.8);
		position: absolute;
		top: 50%;
		left: 5px;
		transform: translateY(-50%);
	}
	& input {
		width: 100%;
		padding: 0 5px;
		height: 40px;
		font-size: 16px;
		border: none;
		background: none;
		outline: none;
	}
	& input:focus ~ label,
	& input:not([value='']) ~ label {
		top: -5px;
	}
`
