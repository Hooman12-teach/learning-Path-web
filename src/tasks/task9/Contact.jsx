import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="contact-page">
      <h1>Get In Touch</h1>
      
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Information</h2>
          
          <div className="info-item">
            <h3>📧 Email</h3>
            <p>hello@example.com</p>
          </div>
          
          <div className="info-item">
            <h3>📱 Phone</h3>
            <p>+1 (234) 567-8900</p>
          </div>
          
          <div className="info-item">
            <h3>📍 Location</h3>
            <p>New York, USA</p>
          </div>
          
          <div className="social-links">
            <h3>Follow Me</h3>
            <div className="links">
              <a href="#linkedin">LinkedIn</a>
              <a href="#github">GitHub</a>
              <a href="#twitter">Twitter</a>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send me a message</h2>
          
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message here..."
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">Send Message</button>

          {submitted && (
            <div className="success-message">
              ✅ Thank you! Your message has been sent.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
