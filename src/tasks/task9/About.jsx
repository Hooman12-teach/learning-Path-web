import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <h1>About Me</h1>
      
      <div className="about-content">
        <div className="about-text">
          <h2>Frontend Developer</h2>
          <p>
            I'm a passionate React developer with 3+ years of experience building modern web applications.
            I specialize in creating responsive, user-friendly interfaces with clean, maintainable code.
          </p>
          
          <h3>Education</h3>
          <ul>
            <li>Bachelor's in Computer Science</li>
            <li>React Advanced Course</li>
            <li>Full Stack Development Bootcamp</li>
          </ul>

          <h3>Experience</h3>
          <ul>
            <li>Frontend Developer at Tech Company (2 years)</li>
            <li>Junior Developer at Startup (1 year)</li>
            <li>Freelance Web Developer (ongoing)</li>
          </ul>
        </div>

        <div className="stats">
          <div className="stat-item">
            <h3>50+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat-item">
            <h3>30+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="stat-item">
            <h3>5+</h3>
            <p>Years Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
