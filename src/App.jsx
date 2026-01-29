import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Import all tasks
import Task1 from './tasks/task1/Task1';
import Task2 from './tasks/task2/Task2';
import Task3 from './tasks/task3/Task3';
import Task4 from './tasks/task4/Task4';
import Task5 from './tasks/task5/Task5';
import Task6 from './tasks/task6/Task6';
import Task7 from './tasks/task7/Task7';
import Task8 from './tasks/task8/Task8';
import Task9 from './tasks/task9/Task9';
import Task10 from './tasks/task10/Task10';
import { ThemeProvider } from './tasks/task10/ThemeContext';
import Task11 from './tasks/task11/Task11';
import MegaProject from './megaProject/MegaProject';

function Home() {
  return (
    <div className="home-container">
      <div className="home-header">
        <h1>📚 React Revision Tasks</h1>
        <p>Practical Assignment by Sir Talal Ahmed</p>
        <p className="subtitle">Select a task to begin</p>
      </div>

      <div className="tasks-grid">
        <Link to="/task1" className="task-card">
          <span className="task-icon">1️⃣</span>
          <h3>React Playground App</h3>
          <p>JSX, Components, Props, Theme</p>
        </Link>

        <Link to="/task2" className="task-card">
          <span className="task-icon">2️⃣</span>
          <h3>Emoji Counter Game</h3>
          <p>State, Events, Buttons</p>
        </Link>

        <Link to="/task3" className="task-card">
          <span className="task-icon">3️⃣</span>
          <h3>Mini Signup Form</h3>
          <p>Forms, Controlled Components</p>
        </Link>

        <Link to="/task4" className="task-card">
          <span className="task-icon">4️⃣</span>
          <h3>Todo App with Rules</h3>
          <p>State, Lists, Events</p>
        </Link>

        <Link to="/task5" className="task-card">
          <span className="task-icon">5️⃣</span>
          <h3>Component Composition</h3>
          <p>Layout, Header, Sidebar, Footer</p>
        </Link>

        <Link to="/task6" className="task-card">
          <span className="task-icon">6️⃣</span>
          <h3>Product Card Generator</h3>
          <p>Props, Reusability, Stock Status</p>
        </Link>

        <Link to="/task7" className="task-card">
          <span className="task-icon">7️⃣</span>
          <h3>Fake Store Viewer</h3>
          <p>useEffect, API Fetching, Loading</p>
        </Link>

        <Link to="/task8" className="task-card">
          <span className="task-icon">8️⃣</span>
          <h3>Random Joke Generator</h3>
          <p>Effects, API Integration</p>
        </Link>

        <Link to="/task9" className="task-card">
          <span className="task-icon">9️⃣</span>
          <h3>Mini Portfolio SPA</h3>
          <p>React Router, Navigation, Pages</p>
        </Link>

        <Link to="/task10" className="task-card">
          <span className="task-icon">🔟</span>
          <h3>Theme Switcher</h3>
          <p>Context API, Global State</p>
        </Link>

        <Link to="/task11" className="task-card">
          <span className="task-icon">1️⃣1️⃣</span>
          <h3>Multi-Styling Challenge</h3>
          <p>CSS, Modules, Inline Styles</p>
        </Link>

        <Link to="/mega-project" className="task-card mega">
          <span className="task-icon">🚀</span>
          <h3>React Dashboard</h3>
          <p>Complete Full-Stack Project</p>
        </Link>
      </div>

      <div className="info-section">
        <h2>Learning Path</h2>
        <p>Complete tasks in order to master React fundamentals:</p>
        <ul>
          <li><strong>Level 1:</strong> React Fundamentals (Tasks 1-2)</li>
          <li><strong>Level 2:</strong> Forms & State (Tasks 3-4)</li>
          <li><strong>Level 3:</strong> React in Depth (Tasks 5-6)</li>
          <li><strong>Level 4:</strong> Effects & Data Fetching (Tasks 7-8)</li>
          <li><strong>Level 5:</strong> SPA & Routing (Task 9)</li>
          <li><strong>Level 6:</strong> State Management (Task 10)</li>
          <li><strong>Level 7:</strong> Styling (Task 11)</li>
          <li><strong>Final:</strong> Mega Project - React Dashboard</li>
        </ul>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task1" element={<Task1 />} />
        <Route path="/task2" element={<Task2 />} />
        <Route path="/task3" element={<Task3 />} />
        <Route path="/task4" element={<Task4 />} />
        <Route path="/task5" element={<Task5 />} />
        <Route path="/task6" element={<Task6 />} />
        <Route path="/task7" element={<Task7 />} />
        <Route path="/task8" element={<Task8 />} />
        <Route path="/task9/*" element={<Task9 />} />
        <Route 
          path="/task10" 
          element={
            <ThemeProvider>
              <Task10 />
            </ThemeProvider>
          } 
        />
        <Route path="/task11" element={<Task11 />} />
        <Route path="/mega-project/*" element={<MegaProject />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
