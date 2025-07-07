import React from 'react';
import './Services.css'; // Assume a CSS file for custom styles

const skills = [
  { 
    name: 'HTML', 
    icon: 'fab fa-html5', 
    level: '90%', 
    desc: 'The foundation of web pages, creating structure and content.'
  },
  { 
    name: 'CSS', 
    icon: 'fab fa-css3-alt', 
    level: '90%', 
    desc: 'Used for designing and styling web pages with layouts and animations.'
  },
  { 
    name: 'JavaScript', 
    icon: 'fab fa-js', 
    level: '80%', 
    desc: 'A versatile language for building interactive web applications.'
  },
  { 
    name: 'React', 
    icon: 'fab fa-react', 
    level: '75%', 
    desc: 'A JavaScript library for building user interfaces and single-page applications.' 
  },
  { 
    name: 'Node.js', 
    icon: 'fab fa-node-js', 
    level: '70%', 
    desc: 'A back-end JavaScript runtime environment for server-side applications.'
  },
  { 
    name: 'MongoDB', 
    icon: 'fas fa-database', 
    level: '65%', 
    desc: 'A NoSQL database for scalable and flexible data storage.'
  }
];

const Services = () => {
  return (
    <div className="services-section">
      <h1>Our Services</h1>
      <div className="services-grid">
        {skills.map(skill => (
          <div className="service-card" key={skill.name}>
            <i className={skill.icon}></i>
            <h2>{skill.name}</h2>
            <p>{skill.desc}</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: skill.level }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
