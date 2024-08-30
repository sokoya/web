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
