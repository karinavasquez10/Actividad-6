import React from 'react';
import {  FaGithub, FaLinkedin } from 'react-icons/fa';


function Portfolio() {
  const projects = [
    {
      title: "Distribuidora Belleza",
      description: "pagina de productos de belleza desarrollado con React y javascript, ademas de otras librerias adicionales",
      technologies: ["React", "Javascript", "CSS"],
      link: "https://github.com/karinavasquez10/Pagina-web-Tienda.git"
    },

    {
        title: "Proyecto Restaurante",
        description: "Proyecto  de reservas  de mesa en un restaurante con Java y MySQL",
        technologies: ["Java", "MySQL",],
        link: "https://github.com/karinavasquez10/distribuidora-belleza"
      },
      {
        title: "Proyecto Aeropuerto",
        description: "Proyecto  de reservas  de vuelos en un aeropuerto, ademas proporciona seleccion de rutas y seleccion de asientos, con Java y MySQL",
        technologies: ["Java", "MySQL",],
        link: "https://github.com/karinavasquez10/distribuidora-belleza"
      },
      {
        title: "Feline Care",
        description: "pagina que proporciona informacion acerca de las diferentes tipos de razas de felinos, su cuidado y su comportamiento, desarrollado con React y javascript, ademas de otras librerias adicionales",
        technologies: ["React", "Javascript", "CSS"],
        link: "https://github.com/karinavasquez10/FelineCare.git"
      },
      
  ];

  const skills = [
    { name: "HTML5", level: "90%", color: "#E44D26" },
    { name: "CSS", level: "85%", color: "#264DE4" },
    { name: "JavaScript", level: "80%", color: "#F7DF1E" },
    { name: "React", level: "85%", color: "#61DAFB" },
    { name: "Tailwind CSS", level: "75%", color: "#38B2AC" },
    { name: "Java", level: "70%", color: "#007396" },
    { name: "C++", level: "75%", color: "#3776AB" },
    { name: "MySQL", level: "80%", color: "#4479A1" },
  
  ];

  return (
    <div className="portfolio-container">
      {/* Header Section */}
      <header className="portfolio-header">
        <div className="profile-section">
          <img 
            src="src\assets\Imagen de WhatsApp 2024-10-14 a las 12.17.23_879c9573.jpg" 
            alt="" 
            className="profile-image"
          />
          <div className="profile-info">
            <h1>Karina Audoro Vasquez</h1>
            <h2>Desarrolladora </h2>
            <div className="social-links">
              <a href="https://github.com/karinavasquez10" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/karina-vasquez-169aa3316?trk=contact-info" target="_blank" rel="noopener noreferrer">
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
          Soy una desarrolladora  apasionada por crear experiencias web 
          intuitivas y atractivas. Con experiencia en HTML,CSS, JAVASCRIPT y otras tecnologías 
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


    </div>
  );
}

export default Portfolio; 