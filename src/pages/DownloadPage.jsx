// Import React and necessary hooks
import { useState } from 'react';
// Import React Router for navigation
import { useNavigate } from 'react-router-dom';
// Import translation hook
import { useTranslation } from 'react-i18next';
// Import form handling library
import { useForm } from 'react-hook-form';
// Import HTTP client for form submission
import axios from 'axios';
// Import styles
import '../styles/DownloadPage.css';

/**
 * DownloadPage component with a form to collect user information
 * Form data is submitted to a Google Sheet via a serverless function
 */
function DownloadPage() {
  // Get translation function
  const { t } = useTranslation();
  // Get navigation function for redirecting after form submission
  const navigate = useNavigate();
  // State for form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  // State for form submission error
  const [error, setError] = useState('');
  
  // Initialize form with react-hook-form
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm();

  // Handle form submission
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setError('');
    
    try {
      // In a real application, this would be a call to your backend API
      // For demonstration, we'll simulate a successful submission
      console.log('Form data submitted:', data);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Redirect to success page
      navigate('/success');
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('There was an error submitting your information. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="download-page">
      <div className="container">
        <h1 className="page-title text-center">{t('download.formTitle')}</h1>
        
        <div className="form-container">
          {/* Display error message if submission fails */}
          {error && <div className="error-message">{error}</div>}
          
          {/* Download form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name field */}
            <div className="form-group">
              <label htmlFor="name" className="form-label">{t('download.nameLabel')}</label>
              <input
                type="text"
                id="name"
                className={`form-input ${errors.name ? 'error' : ''}`}
                {...register('name', { required: true })}
              />
              {errors.name && <span className="error-text">This field is required</span>}
            </div>
            
            {/* Email field */}
            <div className="form-group">
              <label htmlFor="email" className="form-label">{t('download.emailLabel')}</label>
              <input
                type="email"
                id="email"
                className={`form-input ${errors.email ? 'error' : ''}`}
                {...register('email', { 
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                })}
              />
              {errors.email?.type === 'required' && <span className="error-text">This field is required</span>}
              {errors.email?.type === 'pattern' && <span className="error-text">Please enter a valid email address</span>}
            </div>
            
            {/* Phone field (optional) */}
            <div className="form-group">
              <label htmlFor="phone" className="form-label">{t('download.phoneLabel')}</label>
              <input
                type="tel"
                id="phone"
                className="form-input"
                {...register('phone')}
              />
            </div>
            
            {/* Platform selection */}
            <div className="form-group">
              <label htmlFor="platform" className="form-label">{t('download.platformLabel')}</label>
              <select
                id="platform"
                className={`form-select ${errors.platform ? 'error' : ''}`}
                {...register('platform', { required: true })}
              >
                <option value="">Select platform</option>
                <option value="ios">{t('download.platformOptions.ios')}</option>
                <option value="android">{t('download.platformOptions.android')}</option>
              </select>
              {errors.platform && <span className="error-text">Please select a platform</span>}
            </div>
            
            {/* Submit button */}
            <button 
              type="submit" 
              className="form-submit" 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Processing...' : t('download.submitButton')}
            </button>
            
            {/* Privacy notice */}
            <p className="form-note">{t('download.privacyNotice')}</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DownloadPage;