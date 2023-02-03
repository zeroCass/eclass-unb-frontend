import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../../contexts/AuthContext/actions'
import { AuthContext } from '../../contexts/AuthContext/context'
import styles from './style.module.css'

export const HeaderMenu = () => {
	const authContext = useContext(AuthContext)
	const { authDispatch } = authContext

	const logoutHandler = () => {
		console.log('entrou')
		logout(authDispatch)
	}

	return (
		<header className={styles['header-menu']}>
			<div>
				<h1>LOGO</h1>
				<div className={styles['nav-container']}>
					<ul className={styles['nav-list']}>
						<li>
							<Link to={'/classes'}>Turmas</Link>
						</li>
						<li>
							<Link to={'/questions'}>Questoes</Link>
						</li>
						<li>
							<Link to={'/perfil'}>Perfil</Link>
						</li>
						<li>
							<button onClick={logoutHandler}>Sair</button>
						</li>
					</ul>
				</div>
			</div>
		</header>
	)
}
