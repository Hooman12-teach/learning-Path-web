import { useState } from 'react';
import './Task3.css';

const Task3 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.name.trim() && formData.email.trim() && formData.password.trim()) {
      setSubmittedData({...formData});
      setFormData({
        name: '',
        email: '',
        password: ''
      });
    }
  };

  const isFormEmpty = !formData.name.trim() || !formData.email.trim() || !formData.password.trim();

  return (
    <div className="task3-container">
      <div className="form-wrapper">
        <h1>Task 3: Mini Signup Form</h1>
        
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="form-input"
            />
          </div>

          <button 
            type="submit" 
            className={`submit-btn ${isFormEmpty ? 'disabled' : ''}`}
            disabled={isFormEmpty}
          >
            Sign Up
          </button>
        </form>

        {submittedData && (
          <div className="submitted-data">
            <h2>✅ Submitted Data</h2>
            <div className="data-display">
              <p><strong>Name:</strong> {submittedData.name}</p>
              <p><strong>Email:</strong> {submittedData.email}</p>
              <p><strong>Password:</strong> {'*'.repeat(submittedData.password.length)}</p>
            </div>
            <button 
              className="clear-btn"
              onClick={() => setSubmittedData(null)}
            >
              Clear
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Task3;
