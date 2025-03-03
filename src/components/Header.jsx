// Import React and necessary hooks
import { useState, useEffect } from 'react';
// Import React Router for navigation
import { Link, useLocation } from 'react-router-dom';
// Import translation hook
import { useTranslation } from 'react-i18next';
// Import icons
import { FaGlobe, FaBars, FaTimes } from 'react-icons/fa';
// Import styles
import '../styles/Header.css';

/**
 * Header component that includes navigation and language selector
 * Implements responsive design with mobile menu
 */
function Header() {
  // Get translation function and i18n instance
  const { t, i18n } = useTranslation();
  // Get current location for active link highlighting
  const location = useLocation();
  // State for mobile menu toggle
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // State for language dropdown toggle
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  // State to track if header should be transparent (at top) or solid
  const [isTransparent, setIsTransparent] = useState(true);

  // Languages available in the application
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
    { code: 'ar', name: 'العربية' },
    { code: 'de', name: 'Deutsch' },
    { code: 'it', name: 'Italiano' },
    { code: 'es', name: 'Español' }
  ];

  // Function to change the current language
  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    // Update HTML lang attribute
    document.documentElement.lang = langCode;
    // Set RTL direction for Arabic
    document.documentElement.dir = langCode === 'ar' ? 'rtl' : 'ltr';
    // Close the dropdown after selection
    setLanguageDropdownOpen(false);
  };

  // Effect to handle scroll events for header transparency
  useEffect(() => {
    const handleScroll = () => {
      // If scrolled more than 50px, make header solid
      setIsTransparent(window.scrollY < 50);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();
    
    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Effect to close mobile menu when changing routes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Toggle language dropdown
  const toggleLanguageDropdown = () => {
    setLanguageDropdownOpen(!languageDropdownOpen);
  };

  return (
    <header className={`header ${isTransparent ? 'transparent' : 'solid'}`}>
      <div className="container header-container">
        {/* Logo and brand name */}
        <Link to="/" className="logo">
          <img src="/tomato-icon.svg" alt="Pomodoro Timer Logo" className="logo-image" />
          <span className="logo-text">Pomodoro Timer</span>
        </Link>

        {/* Mobile menu toggle button */}
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle menu">
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation and language selector */}
        <div className={`nav-container ${mobileMenuOpen ? 'open' : ''}`}>
          {/* Main navigation */}
          <nav className="main-nav">
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                  {t('header.home')}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/features" className={location.pathname === '/features' ? 'active' : ''}>
                  {t('header.features')}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
                  {t('header.about')}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
                  {t('header.contact')}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Language selector */}
          <div className="language-selector">
            <button 
              className="language-button" 
              onClick={toggleLanguageDropdown}
              aria-expanded={languageDropdownOpen}
              aria-label="Select language"
            >
              <FaGlobe />
              <span>{languages.find(lang => lang.code === i18n.language)?.name || 'English'}</span>
            </button>
            <div className={`language-dropdown ${languageDropdownOpen ? 'show' : ''}`}>
              {languages.map((lang) => (
                <div 
                  key={lang.code} 
                  className="language-option" 
                  onClick={() => changeLanguage(lang.code)}
                >
                  {lang.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;