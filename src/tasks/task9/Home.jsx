import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <div className="hero">
        <h1>Welcome to My Portfolio</h1>
        <p>I'm a passionate React developer with expertise in building modern web applications</p>
        <button className="cta-btn">Get Started</button>
      </div>

      <section className="features">
        <h2>Featured Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <h3>⚛️ React</h3>
            <p>Building interactive UIs with React</p>
          </div>
          <div className="skill-card">
            <h3>🎨 CSS</h3>
            <p>Modern responsive styling</p>
          </div>
          <div className="skill-card">
            <h3>🔄 State Management</h3>
            <p>Context API and advanced patterns</p>
          </div>
          <div className="skill-card">
            <h3>🛣️ Routing</h3>
            <p>React Router DOM mastery</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
