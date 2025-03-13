// Import React and necessary hooks
import { useState } from 'react';
// Import translation hook
import { useTranslation } from 'react-i18next';
// Import form handling library
import { useForm } from 'react-hook-form';
// Import icons
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
// Import styles
import '../styles/ContactPage.css';

/**
 * ContactPage component with a contact form and company information
 * Form data is submitted to a Google Sheet via a Google Form submission
 * 
 * To set up:
 * 1. Create a Google Form with fields matching your form (name, email, subject, message)
 * 2. Get the form submission URL and field entry IDs
 * 3. Update the googleFormUrl and entry IDs in the onSubmit function
 * 4. For production, replace the CORS proxy with a serverless function
 */
function ContactPage() {
  // Get translation function
  const { t } = useTranslation();
  // State for form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  // State for form submission success
  const [isSubmitted, setIsSubmitted] = useState(false);
  // State for form submission error
  const [error, setError] = useState('');
  
  // Initialize form with react-hook-form
  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors } 
  } = useForm();

  // Handle form submission
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setError('');
    
    try {
      console.log('Contact form data submitted:', data);
      
      // Google Form submission URL - this should be replaced with your actual Google Form URL
      // The URL format is typically like: https://docs.google.com/forms/d/e/{form-id}/formResponse
      const googleFormUrl = 'https://docs.google.com/forms/d/e/YOUR_CONTACT_FORM_ID/formResponse';
      
      // Map form field names to Google Form entry IDs
      // These entry IDs need to be replaced with your actual Google Form field IDs
      const formData = new FormData();
      formData.append('entry.123456789', data.name); // Replace 123456789 with your actual entry ID for name
      formData.append('entry.234567890', data.email); // Replace 234567890 with your actual entry ID for email
      formData.append('entry.345678901', data.subject); // Replace 345678901 with your actual entry ID for subject
      formData.append('entry.456789012', data.message); // Replace 456789012 with your actual entry ID for message
      
      // Send data to Google Form
      // Using a proxy or CORS-anywhere service might be necessary due to CORS restrictions
      // For production, consider using a serverless function as a proxy
      const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
      
      await axios({
        method: 'post',
        url: proxyUrl + googleFormUrl,
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      
      // Show success message and reset form
      setIsSubmitted(true);
      reset();
    } catch (err) {
      console.error('Error submitting form:', err);
      
      // Provide more specific error messages based on the error type
      if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setError(`Server error: ${err.response.status}. Please try again later.`);
      } else if (err.request) {
        // The request was made but no response was received
        setError('No response from server. Please check your internet connection and try again.');
      } else {
        // Something happened in setting up the request that triggered an Error
        setError('There was an error sending your message. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Hero section */}
      <section className="contact-hero">
        <div className="container">
          <h1>{t('contact.title')}</h1>
          <p>{t('contact.description')}</p>
        </div>
      </section>

      {/* Contact section */}
      <section className="section">
        <div className="container">
          <div className="contact-container">
            {/* Contact information */}
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>We'd love to hear from you! Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.</p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact-details">
                    <h3>Email Us</h3>
                    <p>support@pomodorotimer.com</p>
                    <p>info@pomodorotimer.com</p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="contact-icon">
                    <FaPhone />
                  </div>
                  <div className="contact-details">
                    <h3>Call Us</h3>
                    <p>+1 (555) 123-4567</p>
                    <p>Mon-Fri, 9am-5pm EST</p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="contact-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact-details">
                    <h3>Visit Us</h3>
                    <p>123 Productivity Street</p>
                    <p>San Francisco, CA 94103</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact form */}
            <div className="contact-form-container">
              {/* Success message */}
              {isSubmitted ? (
                <div className="success-message">
                  <h2>Thank You!</h2>
                  <p>Your message has been sent successfully. We'll get back to you as soon as possible.</p>
                  <button 
                    className="btn btn-primary" 
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2>Send Us a Message</h2>
                  
                  {/* Error message */}
                  {error && <div className="error-message">{error}</div>}
                  
                  {/* Contact form */}
                  <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Name field */}
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">Full Name</label>
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
                      <label htmlFor="email" className="form-label">{t('contact.emailLabel')}</label>
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
                    
                    {/* Subject field */}
                    <div className="form-group">
                      <label htmlFor="subject" className="form-label">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        className={`form-input ${errors.subject ? 'error' : ''}`}
                        {...register('subject', { required: true })}
                      />
                      {errors.subject && <span className="error-text">This field is required</span>}
                    </div>
                    
                    {/* Message field */}
                    <div className="form-group">
                      <label htmlFor="message" className="form-label">{t('contact.messageLabel')}</label>
                      <textarea
                        id="message"
                        className={`form-textarea ${errors.message ? 'error' : ''}`}
                        {...register('message', { required: true })}
                      ></textarea>
                      {errors.message && <span className="error-text">This field is required</span>}
                    </div>
                    
                    {/* Submit button */}
                    <button 
                      type="submit" 
                      className="form-submit" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : t('contact.submitButton')}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="section section-colored">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-container">
            <div className="faq-item">
              <h3 className="faq-question">What is the Pomodoro Technique?</h3>
              <p className="faq-answer">
                The Pomodoro Technique is a time management method that uses a timer to break work into intervals, traditionally 25 minutes in length, separated by short breaks. These intervals are known as "pomodoros".
              </p>
            </div>
            
            <div className="faq-item">
              <h3 className="faq-question">Is the app free to use?</h3>
              <p className="faq-answer">
                We offer both free and premium versions of the app. The free version includes all the basic features you need to get started with the Pomodoro Technique, while the premium version offers additional features like cloud sync, detailed statistics, and more customization options.
              </p>
            </div>
            
            <div className="faq-item">
              <h3 className="faq-question">Can I sync my data across multiple devices?</h3>
              <p className="faq-answer">
                Yes, with our premium version, you can sync your data across multiple devices using your account. This allows you to access your timers, tasks, and statistics from any device.
              </p>
            </div>
            
            <div className="faq-item">
              <h3 className="faq-question">How do I report a bug or suggest a feature?</h3>
              <p className="faq-answer">
                You can report bugs or suggest features by contacting our support team through the contact form on this page or by emailing support@pomodorotimer.com. We appreciate your feedback and are constantly working to improve the app.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;