<<<<<<< HEAD
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
=======
import React from "react"
import ReactDOM from "react-dom/client"

import AllAppRoutes from "./routes"

const App = () => {
	return (
		<div>
			<AllAppRoutes />
		</div>
	)
}

const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(<App />)
>>>>>>> 1c595f6ec93b5fc282ddda35436453fcce0f1100
