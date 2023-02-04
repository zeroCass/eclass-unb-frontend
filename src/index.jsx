import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './common/global.css'
import { AuthProvider } from './contexts/AuthContext'
import MyRoutes from './routes/MyRoutes'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<MyRoutes />
			</AuthProvider>
		</BrowserRouter>
	</React.StrictMode>,
)
