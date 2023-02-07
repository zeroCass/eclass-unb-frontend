import { useContext } from 'react'
import { BiBookContent } from 'react-icons/bi'
import { HiOutlineDocumentReport } from 'react-icons/hi'
import { RiLogoutBoxRLine } from 'react-icons/ri'
import { SiGoogleclassroom } from 'react-icons/si'
import { Link } from 'react-router-dom'
import { logout } from '../../contexts/AuthContext/actions'
import { AuthContext } from '../../contexts/AuthContext/context'
import styles from './style.module.css'

export const HeaderMenu = () => {
	const authContext = useContext(AuthContext)
	const { authState, authDispatch } = authContext

	const logoutHandler = () => {
		logout(authDispatch)
	}

	const userName = authState.name || 'Usuario'
	let userType = ''
	if (authState.userType === 0) userType = 'Administrador(a)'
	if (authState.userType === 1) userType = 'Professor(a)'
	if (authState.userType === 2) userType = 'Aluno(a)'

	return (
		<header className={styles['header-menu']}>
			<div className={styles['pages-container']}>
				<ul className={styles['pages-list']}>
					<li>
						<Link to={'/'}>
							<div className={styles['logo']}></div>
						</Link>
					</li>
					<li>
						<Link to={'/classes'}>
							<div>
								<SiGoogleclassroom></SiGoogleclassroom>
								<span>TURMAS</span>
							</div>
						</Link>
					</li>
					<li>
						<Link to={'/questions'}>
							<div>
								<HiOutlineDocumentReport></HiOutlineDocumentReport>
								<span>QUESTOES</span>
							</div>
						</Link>
					</li>
					<li>
						<Link to={'/subjects'}>
							<div>
								<BiBookContent></BiBookContent>
								<span>MATERIAS</span>
							</div>
						</Link>
					</li>
				</ul>
			</div>
			<div className={styles['user-container']}>
				<ul className={styles['user-list']}>
					<li className={styles['user-name-type']}>
						<h1>{userName}</h1>
						<span>{userType}</span>
					</li>
					<li className={styles['user-photo']}>
						<Link to={'/perfil'}>
							<div></div>
						</Link>
					</li>
					<li>
						<button onClick={logoutHandler}>
							<RiLogoutBoxRLine></RiLogoutBoxRLine>
							<span>SAIR</span>
						</button>
					</li>
				</ul>
			</div>
		</header>
	)
}
