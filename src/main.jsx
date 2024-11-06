import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.scss'

window.scrollTo(0, 0);
window.scrollTo(0, 0);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// To clear out comments \/\/.*
// To clear out classes className="[^"]*"