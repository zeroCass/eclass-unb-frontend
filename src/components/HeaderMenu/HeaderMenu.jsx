import { useContext } from 'react'
import { BiBookContent } from 'react-icons/bi'
import { HiOutlineDocumentReport } from 'react-icons/hi'
import { IoBookOutline } from 'react-icons/io5'
import { MdOutlineSchool } from 'react-icons/md'
import { RiLogoutBoxRLine } from 'react-icons/ri'
import { SiGoogleclassroom } from 'react-icons/si'
import { Link } from 'react-router-dom'
import { logout } from '../../contexts/AuthContext/actions'
import { AuthContext } from '../../contexts/AuthContext/context'
import * as Styled from './styles'

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
		<Styled.Header>
			<Styled.PagesContainer>
				<Styled.PagesList>
					<li>
						<Link to={'/'}>
							<div className="logo"></div>
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
					{/* render extra button for the ADM */}
					{authState.userType === 0 && (
						<>
							<li>
								<Link to={'/students'}>
									<div>
										<MdOutlineSchool />
										<span>ESTUDANTES</span>
									</div>
								</Link>
							</li>
							<li>
								<Link to={'/teachers'}>
									<div>
										<IoBookOutline />
										<span>PROFESSORES</span>
									</div>
								</Link>
							</li>
						</>
					)}
				</Styled.PagesList>
			</Styled.PagesContainer>
			<Styled.UserContainer>
				<Styled.UserList>
					<li className="user-name-type">
						<h1>{userName}</h1>
						<span>{userType}</span>
					</li>
					<li className="user-photo">
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
				</Styled.UserList>
			</Styled.UserContainer>
		</Styled.Header>
	)
}
