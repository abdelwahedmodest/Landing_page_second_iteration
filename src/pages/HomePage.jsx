// Import React
import React from 'react';
// Import React Router for navigation
import { Link } from 'react-router-dom';
// Import translation hook
import { useTranslation } from 'react-i18next';
// Import icons
import { FaClock, FaTasks, FaChartBar, FaBell } from 'react-icons/fa';
// Import styles
import '../styles/HomePage.css';

/**
 * HomePage component that serves as the landing page for the application
 * Includes hero section, features, testimonials, and call-to-action
 */
function HomePage() {
  // Get translation function
  const { t } = useTranslation();

  return (
    <div className="home-page">
      {/* Hero section with app showcase */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>{t('hero.title')}</h1>
            <p>{t('hero.subtitle')}</p>
            <div className="hero-buttons">
              <Link to="/download" className="btn btn-primary btn-large">
                {t('hero.downloadButton')}
              </Link>
              <a href="#features" className="btn btn-secondary btn-large">
                {t('hero.learnMoreButton')}
              </a>
            </div>
          </div>
          <img 
            src="/mobile_app.jpg" 
            alt="Pomodoro Timer App" 
            className="hero-image" 
          />
        </div>
      </section>

      {/* App demo video section */}
      <section className="section">
        <div className="container">
          <h2 className="text-center mb-4">See Pomodoro Timer in Action</h2>
          <div className="video-container">
            <iframe 
              src="/POMODORTO3.mp4" 
              title="Pomodoro Timer Demo" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section id="features" className="section section-colored">
        <div className="container">
          <h2 className="text-center">{t('features.title')}</h2>
          <div className="features-grid">
            {/* Feature 1 */}
            <div className="feature-card">
              <div className="feature-icon">
                <FaClock />
              </div>
              <h3>{t('features.feature1.title')}</h3>
              <p>{t('features.feature1.description')}</p>
            </div>
            
            {/* Feature 2 */}
            <div className="feature-card">
              <div className="feature-icon">
                <FaTasks />
              </div>
              <h3>{t('features.feature2.title')}</h3>
              <p>{t('features.feature2.description')}</p>
            </div>
            
            {/* Feature 3 */}
            <div className="feature-card">
              <div className="feature-icon">
                <FaChartBar />
              </div>
              <h3>{t('features.feature3.title')}</h3>
              <p>{t('features.feature3.description')}</p>
            </div>
            
            {/* Feature 4 */}
            <div className="feature-card">
              <div className="feature-icon">
                <FaBell />
              </div>
              <h3>{t('features.feature4.title')}</h3>
              <p>{t('features.feature4.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section className="section">
        <div className="container">
          <h2 className="text-center">{t('testimonials.title')}</h2>
          <div className="testimonials-container">
            {/* Testimonial 1 */}
            <div className="testimonial-card">
              <p className="testimonial-text">"{t('testimonials.testimonial1.text')}"</p>
              <p className="testimonial-author">— {t('testimonials.testimonial1.author')}</p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="testimonial-card">
              <p className="testimonial-text">"{t('testimonials.testimonial2.text')}"</p>
              <p className="testimonial-author">— {t('testimonials.testimonial2.author')}</p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="testimonial-card">
              <p className="testimonial-text">"{t('testimonials.testimonial3.text')}"</p>
              <p className="testimonial-author">— {t('testimonials.testimonial3.author')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA section */}
      <section className="download-section">
        <div className="container">
          <div className="download-content">
            <h2>{t('download.title')}</h2>
            <p className="mb-4">{t('download.subtitle')}</p>
            <Link to="/download" className="btn btn-primary btn-large">
              {t('hero.downloadButton')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;