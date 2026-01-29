import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack React application with cart functionality and payment integration',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task manager with real-time updates and user authentication',
      technologies: ['React', 'Firebase'],
      link: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Interactive weather app with geolocation and API integration',
      technologies: ['React', 'API'],
      link: '#'
    },
    {
      id: 4,
      title: 'Social Media Clone',
      description: 'Full-featured social platform with posts, comments, and messaging',
      technologies: ['React', 'Express', 'PostgreSQL'],
      link: '#'
    }
  ];

  return (
    <div className="projects-page">
      <h1>My Projects</h1>
      
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p className="description">{project.description}</p>
            
            <div className="technologies">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-badge">{tech}</span>
              ))}
            </div>
            
            <a href={project.link} className="view-link">View Project →</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
