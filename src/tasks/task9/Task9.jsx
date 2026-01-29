import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import NotFound from './NotFound';
import './Task9.css';

const Task9 = () => {
  return (
    <BrowserRouter basename="/task9">
      <div className="task9-container">
        <nav className="navbar">
          <div className="nav-content">
            <h1 className="logo">Portfolio</h1>
            <ul className="nav-links">
              <li><Link to="/">🏠 Home</Link></li>
              <li><Link to="/about">ℹ️ About</Link></li>
              <li><Link to="/projects">🚀 Projects</Link></li>
              <li><Link to="/contact">📧 Contact</Link></li>
            </ul>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>&copy; 2024 Portfolio Website. Built with React & React Router.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default Task9;
