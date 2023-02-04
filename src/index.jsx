import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { AuthProvider } from './contexts/AuthContext'
import MyRoutes from './routes/MyRoutes'
import { GlobalStyles } from './styles/global.styled'
import { theme } from './styles/theme'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<AuthProvider>
					<MyRoutes />
				</AuthProvider>
			</BrowserRouter>
			<GlobalStyles />
		</ThemeProvider>
	</React.StrictMode>,
)
