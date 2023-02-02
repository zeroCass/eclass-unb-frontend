import authImage from '../../assets/svg/authImage.svg'
import './style.css'

export const AuthSection = ({
	logo,
	title,
	handleSubmit,
	formComponents,
	buttonsContainer,
}) => {
	return (
		<section className="auth-section">
			<div className="auth-container">
				<div className="logo-container">
					<img src={logo} className="logo" alt="e-class logo" />
					<h1>{title}</h1>
				</div>
				<form onSubmit={handleSubmit}>
					{formComponents}
					{buttonsContainer}
				</form>
			</div>
			<div className="auth-img-container">
				<img
					src={authImage}
					className="authImage"
					alt="authentication image"
				/>
			</div>
		</section>
	)
}
