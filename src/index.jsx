import { createTheme, ThemeProvider } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './common/global.css'
import { AuthProvider } from './contexts/AuthContext'
import App from './pages/App'

const theme = createTheme({
	palette: {
		primary: {
			main: '#19338f',
		},
	},
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<AuthProvider>
					<Routes>
						<Route path="*" element={<App />} />
					</Routes>
				</AuthProvider>
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>,
)
