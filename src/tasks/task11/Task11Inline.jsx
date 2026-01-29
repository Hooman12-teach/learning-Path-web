const Task11Inline = () => {
  const containerStyle = {
    padding: '40px 20px',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const cardStyle = {
    background: 'white',
    padding: '40px',
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    maxWidth: '500px',
    textAlign: 'center',
    animation: 'fadeIn 0.5s ease-in-out'
  };

  const titleStyle = {
    color: '#667eea',
    margin: '0 0 20px 0',
    fontSize: '1.8em'
  };

  const paragraphStyle = {
    color: '#666',
    lineHeight: '1.6',
    marginBottom: '25px'
  };

  const buttonStyle = {
    padding: '12px 30px',
    backgroundColor: '#667eea',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '1em',
    transition: 'all 0.3s ease'
  };

  return (
    <div style={containerStyle}>
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <div style={cardStyle}>
        <h2 style={titleStyle}>Inline Styles</h2>
        <p style={paragraphStyle}>
          This component uses inline styles with JavaScript objects. Good for dynamic styles and component-level customization.
        </p>
        <button 
          style={buttonStyle}
          onMouseOver={(e) => e.target.style.backgroundColor = '#5568d3'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#667eea'}
        >
          Click Me
        </button>
      </div>
    </div>
  );
};

export default Task11Inline;
