import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import './Task10.css';

const Task10 = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`task10-container ${isDarkTheme ? 'dark' : 'light'}`}>
      <div className="theme-card">
        <h1>Task 10: Theme Switcher App</h1>
        <p>Global Theme State Using Context API</p>

        <div className="theme-display">
          <div className="theme-icon">
            {isDarkTheme ? '🌙' : '☀️'}
          </div>
          <div className="theme-status">
            <p>Current Theme: <strong>{isDarkTheme ? 'Dark' : 'Light'}</strong></p>
          </div>
        </div>

        <button className="theme-toggle" onClick={toggleTheme}>
          {isDarkTheme ? '☀️ Switch to Light Mode' : '🌙 Switch to Dark Mode'}
        </button>

        <div className="features">
          <h2>Features</h2>
          <ul>
            <li>✅ Global theme state with Context API</li>
            <li>✅ No prop drilling required</li>
            <li>✅ Easy access from any component</li>
            <li>✅ Smooth theme transitions</li>
            <li>✅ Responsive design</li>
          </ul>
        </div>

        <div className="demo-section">
          <h2>Component Showcase</h2>
          <div className="demo-components">
            <div className="demo-card">
              <h3>Card Component</h3>
              <p>This demonstrates how components automatically adapt to the global theme without props.</p>
              <button className="demo-btn">Demo Button</button>
            </div>

            <div className="demo-card">
              <h3>Another Card</h3>
              <p>All components use the Context API theme without direct prop passing.</p>
              <button className="demo-btn">Demo Button</button>
            </div>
          </div>
        </div>

        <div className="info-box">
          <h3>💡 How It Works</h3>
          <p>
            The ThemeContext is created using React's createContext hook. The ThemeProvider wrapper 
            provides the theme state and toggle function to all child components. Any component can 
            access the theme using useContext(ThemeContext) without prop drilling!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Task10;
