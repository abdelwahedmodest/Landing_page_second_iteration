// Import React
import React from 'react';
// Import translation hook
import { useTranslation } from 'react-i18next';
// Import icons
import { 
  FaClock, 
  FaTasks, 
  FaChartBar, 
  FaBell, 
  FaCalendarAlt, 
  FaHistory,
  FaCloudUploadAlt,
  FaMobileAlt
} from 'react-icons/fa';
// Import styles
import '../styles/FeaturesPage.css';

/**
 * FeaturesPage component that showcases all app features in detail
 */
function FeaturesPage() {
  // Get translation function
  const { t } = useTranslation();

  // Additional features not in the translation files
  const additionalFeatures = [
    {
      icon: <FaCalendarAlt />,
      title: "Calendar Integration",
      description: "Sync your Pomodoro sessions with your calendar to plan your day effectively."
    },
    {
      icon: <FaHistory />,
      title: "Session History",
      description: "Review your past Pomodoro sessions to analyze your productivity patterns."
    },
    {
      icon: <FaCloudUploadAlt />,
      title: "Cloud Sync",
      description: "Sync your data across multiple devices to access your timers anywhere."
    },
    {
      icon: <FaMobileAlt />,
      title: "Offline Mode",
      description: "Use the app without an internet connection and sync when you're back online."
    }
  ];

  return (
    <div className="features-page">
      {/* Hero section */}
      <section className="features-hero">
        <div className="container">
          <h1>Powerful Features to Boost Your Productivity</h1>
          <p>Discover all the tools and features that make Pomodoro Timer the ultimate productivity app.</p>
        </div>
      </section>

      {/* Core features section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Core Features</h2>
          <div className="features-grid">
            {/* Feature 1 */}
            <div className="feature-card">
              <div className="feature-icon">
                <FaClock />
              </div>
              <h3>{t('features.feature1.title')}</h3>
              <p>{t('features.feature1.description')}</p>
              <ul className="feature-details">
                <li>Customize work intervals (default: 25 minutes)</li>
                <li>Adjust break durations (short: 5 min, long: 15 min)</li>
                <li>Set the number of sessions before a long break</li>
                <li>Save multiple timer presets for different activities</li>
              </ul>
            </div>
            
            {/* Feature 2 */}
            <div className="feature-card">
              <div className="feature-icon">
                <FaTasks />
              </div>
              <h3>{t('features.feature2.title')}</h3>
              <p>{t('features.feature2.description')}</p>
              <ul className="feature-details">
                <li>Create task lists for each Pomodoro session</li>
                <li>Set priorities and deadlines for tasks</li>
                <li>Track completed Pomodoros for each task</li>
                <li>Organize tasks with tags and categories</li>
              </ul>
            </div>
            
            {/* Feature 3 */}
            <div className="feature-card">
              <div className="feature-icon">
                <FaChartBar />
              </div>
              <h3>{t('features.feature3.title')}</h3>
              <p>{t('features.feature3.description')}</p>
              <ul className="feature-details">
                <li>Daily, weekly, and monthly productivity reports</li>
                <li>Visual charts of your focus time</li>
                <li>Track your most productive days and times</li>
                <li>Export data for personal analysis</li>
              </ul>
            </div>
            
            {/* Feature 4 */}
            <div className="feature-card">
              <div className="feature-icon">
                <FaBell />
              </div>
              <h3>{t('features.feature4.title')}</h3>
              <p>{t('features.feature4.description')}</p>
              <ul className="feature-details">
                <li>Customizable notification sounds</li>
                <li>Optional vibration alerts</li>
                <li>Visual notifications with screen flashes</li>
                <li>Do Not Disturb integration during focus sessions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Additional features section */}
      <section className="section section-colored">
        <div className="container">
          <h2 className="section-title">Additional Features</h2>
          <div className="features-grid">
            {additionalFeatures.map((feature, index) => (
              <div className="feature-card" key={index}>
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature comparison section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Feature Comparison</h2>
          <div className="comparison-table-container">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Free Version</th>
                  <th>Premium Version</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Basic Pomodoro Timer</td>
                  <td>✓</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Customizable Timers</td>
                  <td>Limited</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Task Management</td>
                  <td>Basic</td>
                  <td>Advanced</td>
                </tr>
                <tr>
                  <td>Statistics</td>
                  <td>7 Days</td>
                  <td>Unlimited</td>
                </tr>
                <tr>
                  <td>Cloud Sync</td>
                  <td>-</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Calendar Integration</td>
                  <td>-</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Custom Themes</td>
                  <td>-</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Ad-Free Experience</td>
                  <td>-</td>
                  <td>✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FeaturesPage;