import * as Styled from './styles'

export const Button = ({
	onClick,
	margin = 0,
	padding = 0,
	width = '160px',
	height = '40px',
	fontSize = '23px',
	children,
}) => {
	return (
		<Styled.Button
			onClick={onClick}
			margin={margin}
			padding={padding}
			width={width}
			height={height}
			fontSize={fontSize}
		>
			{children}
		</Styled.Button>
	)
}
