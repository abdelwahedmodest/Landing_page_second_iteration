// Import React and ReactDOM libraries for rendering the application
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Import the main App component
import App from './App.jsx'
// Import the global CSS styles
import './styles/index.css'
// Import the i18n configuration for internationalization
import './i18n.jsx'

// Create a root element and render the App component inside StrictMode
// StrictMode helps identify potential problems in the application
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)