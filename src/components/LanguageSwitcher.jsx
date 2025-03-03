// Import React and necessary hooks
import { useState, useEffect, useRef } from 'react';
// Import translation hook
import { useTranslation } from 'react-i18next';
// Import icons
import { FaGlobe, FaChevronDown } from 'react-icons/fa';
// Import styles
import '../styles/LanguageSwitcher.css';

/**
 * LanguageSwitcher component for changing the application language
 * Displays a dropdown with available language options
 */
function LanguageSwitcher() {
  // Get translation function and i18n instance
  const { i18n } = useTranslation();
  // State for dropdown visibility
  const [isOpen, setIsOpen] = useState(false);
  // Ref for the dropdown container (used for click outside detection)
  const dropdownRef = useRef(null);

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
    setIsOpen(false);
  };

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Effect to handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Add event listener when dropdown is open
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    // Clean up event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="language-switcher" ref={dropdownRef}>
      <button 
        className="language-button" 
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-label="Select language"
      >
        <FaGlobe className="language-icon" />
        <span className="current-language">
          {languages.find(lang => lang.code === i18n.language)?.name || 'English'}
        </span>
        <FaChevronDown className={`dropdown-arrow ${isOpen ? 'open' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="language-dropdown">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`language-option ${lang.code === i18n.language ? 'active' : ''}`}
              onClick={() => changeLanguage(lang.code)}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;