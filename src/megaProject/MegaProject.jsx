import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthProvider, AuthContext } from './context/AuthContext';
import { MegaProjectThemeProvider, ThemeContext } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Login from './pages/Login';
import DashboardHome from './pages/DashboardHome';
import Users from './pages/Users';
import Products from './pages/Products';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import './styles/MegaProject.css';

const DashboardContent = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const { isDarkTheme } = useContext(ThemeContext);

  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <div className={`dashboard-wrapper ${isDarkTheme ? 'dark' : 'light'}`}>
      <Navbar />
      <div className="dashboard-main">
        <Sidebar />
        <div className="dashboard-content">
          <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="/users" element={<Users />} />
            <Route path="/products" element={<Products />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

const MegaProject = () => {
  return (
    <AuthProvider>
      <MegaProjectThemeProvider>
        <BrowserRouter basename="/mega-project">
          <DashboardContent />
        </BrowserRouter>
      </MegaProjectThemeProvider>
    </AuthProvider>
  );
};

export default MegaProject;
