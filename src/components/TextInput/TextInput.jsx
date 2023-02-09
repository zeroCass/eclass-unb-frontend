import * as Styled from './styles'

export const TextInput = ({
	type,
	id,
	onChange,
	value,
	required,
	labelValue,
}) => {
	return (
		<Styled.TextField>
			<input
				type={type}
				id={id}
				autoComplete="off"
				onChange={onChange}
				value={value}
				required={required}
			/>
			<label htmlFor={id}>{labelValue}</label>
		</Styled.TextField>
	)
}
