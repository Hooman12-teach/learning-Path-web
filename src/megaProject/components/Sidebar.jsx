import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import '../styles/Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const menuItems = [
    { id: 1, icon: '📈', label: 'Dashboard', path: '/mega-project' },
    { id: 2, icon: '👥', label: 'Users', path: '/mega-project/users' },
    { id: 3, icon: '📦', label: 'Products', path: '/mega-project/products' },
    { id: 4, icon: '📊', label: 'Analytics', path: '/mega-project/analytics' },
    { id: 5, icon: '⚙️', label: 'Settings', path: '/mega-project/settings' }
  ];

  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button 
        className="toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '◀' : '▶'}
      </button>

      <div className="sidebar-header">
        {isOpen && <h3>Menu</h3>}
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className="nav-item"
            onClick={() => navigate(item.path)}
            title={item.label}
          >
            <span className="icon">{item.icon}</span>
            {isOpen && <span className="label">{item.label}</span>}
          </button>
        ))}
      </nav>

      {isOpen && (
        <div className="sidebar-footer">
          <div className="user-card">
            <div className="avatar">{user.name.charAt(0)}</div>
            <div className="user-info">
              <p className="user-name">{user.name}</p>
              <p className="user-role">Admin</p>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
