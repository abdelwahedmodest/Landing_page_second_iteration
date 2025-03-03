// Import React
import React from 'react';
// Import translation hook
import { useTranslation } from 'react-i18next';
// Import styles
import '../styles/AboutPage.css';

/**
 * AboutPage component that provides information about the app and the Pomodoro technique
 */
function AboutPage() {
  // Get translation function
  const { t } = useTranslation();

  return (
    <div className="about-page">
      {/* Hero section */}
      <section className="about-hero">
        <div className="container">
          <h1>{t('about.title')}</h1>
        </div>
      </section>

      {/* Main content section */}
      <section className="section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                The Pomodoro Timer app was created by a team of productivity enthusiasts who wanted to bring the power of the Pomodoro Technique to mobile devices in a beautiful, intuitive way.
              </p>
              <p>
                {t('about.description')}
              </p>
              <p>
                {t('about.mission')}
              </p>
              
              <h2 className="mt-4">The Pomodoro Technique</h2>
              <p>
                The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks.
              </p>
              <p>
                These intervals are known as "pomodoros", the plural in English of the Italian word pomodoro (tomato), after the tomato-shaped kitchen timer that Cirillo used as a university student.
              </p>
              
              <h3 className="mt-3">The Basic Technique</h3>
              <ol className="technique-steps">
                <li>Decide on the task to be done.</li>
                <li>Set the pomodoro timer (traditionally to 25 minutes).</li>
                <li>Work on the task until the timer rings.</li>
                <li>Take a short break (5 minutes).</li>
                <li>After four pomodoros, take a longer break (15-30 minutes).</li>
              </ol>
            </div>
            
            <div className="about-image-container">
              <img 
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80" 
                alt="Person using Pomodoro Timer" 
                className="about-image" 
              />
              
              <div className="about-stats">
                <div className="stat-item">
                  <span className="stat-number">1M+</span>
                  <span className="stat-label">Downloads</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">4.8</span>
                  <span className="stat-label">App Store Rating</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">150+</span>
                  <span className="stat-label">Countries</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team section */}
      <section className="section section-colored">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">
                <img 
                  src="https://randomuser.me/api/portraits/women/44.jpg" 
                  alt="Sarah Johnson" 
                />
              </div>
              <h3 className="member-name">Sarah Johnson</h3>
              <p className="member-role">Founder & CEO</p>
              <p className="member-bio">
                Productivity enthusiast with a background in software development and UX design.
              </p>
            </div>
            
            <div className="team-member">
              <div className="member-avatar">
                <img 
                  src="https://randomuser.me/api/portraits/men/32.jpg" 
                  alt="Michael Chen" 
                />
              </div>
              <h3 className="member-name">Michael Chen</h3>
              <p className="member-role">Lead Developer</p>
              <p className="member-bio">
                Full-stack developer with a passion for creating intuitive, high-performance apps.
              </p>
            </div>
            
            <div className="team-member">
              <div className="member-avatar">
                <img 
                  src="https://randomuser.me/api/portraits/women/68.jpg" 
                  alt="Emma Rodriguez" 
                />
              </div>
              <h3 className="member-name">Emma Rodriguez</h3>
              <p className="member-role">UX/UI Designer</p>
              <p className="member-bio">
                Designer focused on creating beautiful, accessible, and user-friendly interfaces.
              </p>
            </div>
            
            <div className="team-member">
              <div className="member-avatar">
                <img 
                  src="https://randomuser.me/api/portraits/men/75.jpg" 
                  alt="David Kim" 
                />
              </div>
              <h3 className="member-name">David Kim</h3>
              <p className="member-role">Marketing Director</p>
              <p className="member-bio">
                Marketing specialist with experience in growth hacking and user acquisition.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;