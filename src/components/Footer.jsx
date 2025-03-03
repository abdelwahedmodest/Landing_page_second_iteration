// Import React
import React from 'react';
// Import React Router for navigation
import { Link } from 'react-router-dom';
// Import translation hook
import { useTranslation } from 'react-i18next';
// Import icons
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
// Import styles
import '../styles/Footer.css';

/**
 * Footer component with navigation links, social media icons, and copyright information
 */
function Footer() {
  // Get translation function
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Footer logo and description */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src="/tomato-icon.svg" alt="Pomodoro Timer Logo" className="footer-logo-image" />
              <span>Pomodoro Timer</span>
            </Link>
            <p className="footer-description">
              The ultimate productivity app to help you focus and achieve more with timed work sessions and breaks.
            </p>
          </div>

          {/* Quick links */}
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">{t('header.home')}</Link></li>
              <li><Link to="/features">{t('header.features')}</Link></li>
              <li><Link to="/about">{t('header.about')}</Link></li>
              <li><Link to="/contact">{t('header.contact')}</Link></li>
              <li><Link to="/download">{t('hero.downloadButton')}</Link></li>
            </ul>
          </div>

          {/* Legal links */}
          <div className="footer-links">
            <h3>Legal</h3>
            <ul>
              <li><Link to="/privacy">{t('footer.privacyPolicy')}</Link></li>
              <li><Link to="/terms">{t('footer.termsOfService')}</Link></li>
            </ul>
          </div>

          {/* Social media links */}
          <div className="footer-social">
            <h3>Connect With Us</h3>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright information */}
        <div className="footer-bottom">
          <p className="copyright">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;