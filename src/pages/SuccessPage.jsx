// Import React
import React from 'react';
// Import React Router for navigation
import { Link } from 'react-router-dom';
// Import icons
import { FaCheckCircle, FaDownload } from 'react-icons/fa';
// Import styles
import '../styles/SuccessPage.css';

/**
 * SuccessPage component shown after successful form submission
 * Provides download links and next steps
 */
function SuccessPage() {
  return (
    <div className="success-page">
      <div className="container">
        <div className="success-container">
          {/* Success icon and message */}
          <div className="success-icon">
            <FaCheckCircle />
          </div>
          <h1>Thank You!</h1>
          <p className="success-message">
            Your information has been successfully submitted. You can now download the Pomodoro Timer app.
          </p>
          
          {/* Download buttons */}
          <div className="download-buttons">
            <a href="#" className="download-button ios">
              <FaDownload />
              <span>Download for iOS</span>
            </a>
            <a href="#" className="download-button android">
              <FaDownload />
              <span>Download for Android</span>
            </a>
          </div>
          
          {/* Next steps */}
          <div className="next-steps">
            <h2>Next Steps</h2>
            <ol>
              <li>Install the app on your device</li>
              <li>Create an account or sign in</li>
              <li>Set up your first Pomodoro timer</li>
              <li>Start boosting your productivity!</li>
            </ol>
          </div>
          
          {/* Return to home link */}
          <Link to="/" className="return-link">
            Return to Home Page
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SuccessPage;