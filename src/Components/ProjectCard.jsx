import React from "react";
import "./ProjectCard.css";
import { Link } from "react-router-dom";

const ProjectCard = ({ title, desc, url, image }) => {
  return (
    <div className="projectBox">
      <div className="overlay"></div>
      <div className="projectImage">
        <img src={image} alt="Project" />
      </div>
      <div className="projectText">
        <h2>{title}</h2>
        <p>{desc}</p>
        <div className="projectBtns">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <button>View Project</button>
          </a>
          <Link>
            <button>View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
