import authImage from '../../assets/svg/authImage.svg'
import styles from './style.module.css'

export const AuthSection = ({
	logo,
	title,
	handleSubmit,
	formComponents,
	buttonsContainer,
	othersComponents,
}) => {
	return (
		<section className={styles['auth-section']}>
			<div className={styles['auth-container']}>
				<div className={styles['logo-container']}>
					<img src={logo} className={styles['logo']} alt="e-class logo" />
					<h1>{title}</h1>
				</div>
				<form onSubmit={handleSubmit}>
					{formComponents}
					{othersComponents}
					{buttonsContainer}
				</form>
			</div>
			<div className={styles['auth-img-container']}>
				<img
					src={authImage}
					className="auth-image"
					alt="authentication image"
				/>
			</div>
		</section>
	)
}
