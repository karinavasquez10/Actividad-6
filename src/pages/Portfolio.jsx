import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaJs, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiTailwindcss, SiFirebase } from 'react-icons/si';

function Portfolio() {
  const projects = [
    {
      title: "Distribuidora Belleza",
      description: "E-commerce de productos de belleza desarrollado con React y Firebase",
      image: "/path/to/project-image.jpg",
      technologies: ["React", "Firebase", "CSS"],
      link: "https://github.com/karinavasquez10/distribuidora-belleza"
    },
    // Agrega aquí más proyectos
  ];

  const skills = [
    { name: "HTML5", icon: <FaHtml5 />, level: "90%" },
    { name: "CSS3", icon: <FaCss3Alt />, level: "85%" },
    { name: "JavaScript", icon: <FaJs />, level: "80%" },
    { name: "React", icon: <FaReact />, level: "85%" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, level: "75%" },
    { name: "Firebase", icon: <SiFirebase />, level: "70%" }
  ];

  return (
    <div className="portfolio-container">
      {/* Header Section */}
      <header className="portfolio-header">
        <div className="profile-section">
          <img 
            src="/path/to/profile-image.jpg" 
            alt="Karina Audoro Vasquez" 
            className="profile-image"
          />
          <div className="profile-info">
            <h1>Karina Audoro Vasquez</h1>
            <h2>Desarrolladora Frontend</h2>
            <div className="social-links">
              <a href="https://github.com/karinavasquez10" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/karina-vasquez-169aa3316" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="about-section">
        <h2>Sobre mí</h2>
        <p>
          Soy una desarrolladora frontend apasionada por crear experiencias web 
          intuitivas y atractivas. Con experiencia en React y otras tecnologías 
          modernas, me especializo en construir aplicaciones web responsivas y 
          centradas en el usuario.
        </p>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <h2>Habilidades Técnicas</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: skill.level }}></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <h2>Proyectos</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                Ver Proyecto
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Contacto</h2>
        <p>¿Interesado en trabajar juntos? ¡Contáctame!</p>
        <div className="contact-info">
          <p>Email: vasquezkarina402@gmail.com</p>
          <p>LinkedIn: Karina Vasquez</p>
          <p>GitHub: karinavasquez10</p>
        </div>
      </section>
    </div>
  );
}

export default Portfolio; 