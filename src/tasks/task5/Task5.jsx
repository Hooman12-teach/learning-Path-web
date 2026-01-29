import Layout from './Layout';
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';
import Footer from './Footer';
import './Task5.css';

const Task5 = () => {
  return (
    <Layout>
      <Header>
        <div className="header-content">
          <h1>🏢 Task 5: Component Composition</h1>
          <p>Layout Example with Header, Sidebar, Main, and Footer</p>
        </div>
      </Header>

      <div className="content-wrapper">
        <Sidebar>
          <div className="sidebar-content">
            <h3>Navigation</h3>
            <nav className="sidebar-nav">
              <a href="#home" className="nav-link">🏠 Home</a>
              <a href="#about" className="nav-link">ℹ️ About</a>
              <a href="#services" className="nav-link">⚙️ Services</a>
              <a href="#contact" className="nav-link">📞 Contact</a>
            </nav>

            <h3 className="sidebar-title">Categories</h3>
            <ul className="category-list">
              <li>React Components</li>
              <li>State Management</li>
              <li>Styling</li>
              <li>Routing</li>
            </ul>
          </div>
        </Sidebar>

        <Main>
          <div className="main-body">
            <h2>Welcome to Component Composition</h2>
            <p>
              This page demonstrates proper component composition using React. Each component is reusable and
              follows the single responsibility principle.
            </p>

            <div className="content-section">
              <h3>Features of This Layout:</h3>
              <ul>
                <li><strong>Layout Component:</strong> Wraps all content</li>
                <li><strong>Header Component:</strong> Top navigation and branding</li>
                <li><strong>Sidebar Component:</strong> Navigation menu and links</li>
                <li><strong>Main Component:</strong> Primary content area</li>
                <li><strong>Footer Component:</strong> Bottom information</li>
              </ul>
            </div>

            <div className="content-section">
              <h3>Benefits of Component Composition:</h3>
              <ul>
                <li>✅ Reusability across different pages</li>
                <li>✅ Better code organization and maintenance</li>
                <li>✅ Easier testing of individual components</li>
                <li>✅ Flexible children prop usage</li>
                <li>✅ Separation of concerns</li>
              </ul>
            </div>
          </div>
        </Main>
      </div>

      <Footer>
        <div className="footer-content">
          <p>&copy; 2024 React Revision Tasks. All rights reserved.</p>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#feedback">Feedback</a>
          </div>
        </div>
      </Footer>
    </Layout>
  );
};

export default Task5;
