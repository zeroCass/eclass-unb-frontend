import * as Styled from './styles'

export const TextInput = ({
	type,
	id,
	onChange,
	value,
	required,
	labelValue,
	disabled = false,
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
				disabled={disabled}
			/>
			<label htmlFor={id}>{labelValue}</label>
		</Styled.TextField>
	)
}
