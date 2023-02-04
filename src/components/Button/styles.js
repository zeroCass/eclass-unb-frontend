import styled from 'styled-components'

export const Button = styled.button`
	font-weight: 500;
	font-size: ${({ fontSize }) => fontSize};
	line-height: 34px;
	color: #ffffff;
	width: ${({ width }) => width};
	height: ${({ height }) => height};
	background: ${({ theme }) => theme.btn.colors.primary};
	border-radius: 10px;
	padding: ${({ padding }) => padding};
	margin: ${({ margin }) => margin};
	border: none;
`
