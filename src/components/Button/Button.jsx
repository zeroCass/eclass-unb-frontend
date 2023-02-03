export const Button = ({
	onClick,
	margin,
	padding,
	width,
	height,
	fontSize,
	children,
}) => {
	return (
		<button
			onClick={onClick}
			style={{
				fontFamily: 'Poppins',
				fontStyle: 'normal',
				fontWeight: 500,
				fontSize: fontSize || '23px',
				lineHeight: '34px',
				color: 'white',
				width: width || '160px',
				height: height || '40px',
				background: 'linear-gradient(180deg, #19338f 0%, #90a2e4 100%)',
				borderRadius: '10px',
				margin: margin || '0',
				padding: padding || '0',
				border: 'none',
			}}
		>
			{children}
		</button>
	)
}
