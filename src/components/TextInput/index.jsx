import './style.css'

export const TextInput = ({
	type,
	id,
	onChange,
	value,
	required,
	labelValue,
}) => {
	return (
		<div className="text-field">
			<input
				type={type}
				id={id}
				autoComplete="off"
				onChange={onChange}
				value={value}
				required={required}
			/>
			<label htmlFor={id}>{labelValue}</label>
		</div>
	)
}
