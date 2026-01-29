import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/Navbar.css';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={`navbar ${isDarkTheme ? 'dark' : 'light'}`}>
      <div className="nav-container">
        <div className="nav-left">
          <h1 className="logo">📊 Dashboard</h1>
        </div>

        <div className="nav-center">
          <span className="user-welcome">Welcome, {user.name}!</span>
        </div>

        <div className="nav-right">
          <button 
            className="theme-toggle-icon"
            onClick={toggleTheme}
            title="Toggle theme"
          >
            {isDarkTheme ? '☀️' : '🌙'}
          </button>

          <button 
            className="logout-btn"
            onClick={logout}
          >
            🚪 Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
