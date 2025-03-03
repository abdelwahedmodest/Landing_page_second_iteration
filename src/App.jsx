// Import React Router for navigation
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// Import components
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import HomePage from './pages/HomePage.jsx'
import DownloadPage from './pages/DownloadPage.jsx'
import FeaturesPage from './pages/FeaturesPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import SuccessPage from './pages/SuccessPage.jsx'
// Import global styles
import './styles/App.css'

/**
 * Main App component that sets up routing for the application
 * Uses React Router to handle navigation between different pages
 */
function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/download" element={<DownloadPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/success" element={<SuccessPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App