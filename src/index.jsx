import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './common/global.css'
import { AuthProvider } from './contexts/AuthContext'
import './index.css'
import App from './pages/App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<Routes>
					<Route path="*" element={<App />} />
				</Routes>
			</AuthProvider>
		</BrowserRouter>
	</React.StrictMode>,
)
