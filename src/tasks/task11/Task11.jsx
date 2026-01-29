import { useState } from 'react';
import Task11CSS from './Task11CSS';
import Task11Modules from './Task11Modules';
import Task11Inline from './Task11Inline';
import './Task11.css';

const Task11 = () => {
  const [activeTab, setActiveTab] = useState('css');

  return (
    <div className="task11-main">
      <div className="task11-header">
        <h1>Task 11: Multi-Styling Challenge</h1>
        <p>Same UI Styled Using Different Methods</p>
      </div>

      <div className="tabs">
        <button
          className={`tab-btn ${activeTab === 'css' ? 'active' : ''}`}
          onClick={() => setActiveTab('css')}
        >
          📄 Plain CSS
        </button>
        <button
          className={`tab-btn ${activeTab === 'modules' ? 'active' : ''}`}
          onClick={() => setActiveTab('modules')}
        >
          📦 CSS Modules
        </button>
        <button
          className={`tab-btn ${activeTab === 'inline' ? 'active' : ''}`}
          onClick={() => setActiveTab('inline')}
        >
          ⚙️ Inline Styles
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'css' && <Task11CSS />}
        {activeTab === 'modules' && <Task11Modules />}
        {activeTab === 'inline' && <Task11Inline />}
      </div>

      <div className="comparison">
        <h2>Styling Methods Comparison</h2>
        <div className="comparison-grid">
          <div className="comparison-item">
            <h3>Plain CSS</h3>
            <ul>
              <li>✅ Global styles</li>
              <li>✅ Simple and familiar</li>
              <li>⚠️ Global namespace</li>
              <li>⚠️ Potential conflicts</li>
            </ul>
          </div>
          <div className="comparison-item">
            <h3>CSS Modules</h3>
            <ul>
              <li>✅ Scoped styles</li>
              <li>✅ No naming conflicts</li>
              <li>✅ Component-level styling</li>
              <li>✅ Production-ready</li>
            </ul>
          </div>
          <div className="comparison-item">
            <h3>Inline Styles</h3>
            <ul>
              <li>✅ Dynamic styling</li>
              <li>✅ Component-scoped</li>
              <li>⚠️ Limited pseudo-classes</li>
              <li>⚠️ Larger bundle size</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task11;
