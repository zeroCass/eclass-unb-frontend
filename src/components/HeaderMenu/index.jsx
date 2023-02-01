import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../../contexts/AuthContext/actions'
import { AuthContext } from '../../contexts/AuthContext/context'
import './style.css'

export const HeaderMenu = () => {
	const authContext = useContext(AuthContext)
	const { authDispatch } = authContext

	const logoutHandler = () => {
		logout(authDispatch)
	}

	return (
		<header id="header-menu">
			<div>
				<h1>LOGO</h1>
				<div className="nav-container">
					<ul className="nav-list">
						<li>
							<Link to={'/'}>Turmas</Link>
						</li>
						<li>
							<Link to={'/questions'}>Questoes</Link>
						</li>
						<li>
							<Link to={'/pefil'}>Perfil</Link>
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
