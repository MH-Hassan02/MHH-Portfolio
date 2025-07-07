import React from "react";
import ProjectCard from "./ProjectCard";
import "./Projects.css";
import project1 from "../Images/blogpic.png";
import project2 from "../Images/moviepic.png";
import project3 from "../Images/calculatorpic.png";
import project4 from "../Images/smitpic.png";
import project5 from "../Images/upworkpic.png";
import project6 from "../Images/cbpic.png";
import project7 from "../Images/homemate.png"
import project8 from "../Images/signify.png"

const projectData = [
  {
    title: "HomeMate Website",
    desc: "A real-time video calling and chatting application made on MERN Stack using web-sockets.",
    url: "https://homemate-one.vercel.app",
    image: project8,
  },
  {
    title: "HomeMate Website",
    desc: "A full-stack home rental website made using MERN",
    url: "https://homemate-one.vercel.app",
    image: project7,
  },
  {
    title: "Admission Portal",
    desc: "A full-stack website made using MERN",
    url: "https://students-smit.vercel.app",
    image: project4,
  },
  {
    title: "MHH-Movies",
    desc: "A movies streaming website",
    url: "https://mhh-movies.vercel.app",
    image: project2,
  },
  {
    title: "Blogging Application",
    desc: "A live blog website",
    url: "https://enigma-errands.vercel.app",
    image: project1,
  },
  {
    title: "Calculator",
    desc: "Made a calculator using vanilla JS",
    url: "https://calculator-eight-inky-99.vercel.app/",
    image: project3,
  },
  // {
  //   title: "Upwork Clone",
  //   desc: "Cloned the frontpage UI",
  //   url: "https://upwork-clone-henna.vercel.app/",
  //   image: project5,
  // },
  // {
  //   title: "Coinbase Clone",
  //   desc: "Cloned the frontpage UI",
  //   url: "https://coin-base-website.vercel.app/",
  //   image: project6,
  // },
];

const Projects = () => {
  return (
    <div className="projects-section">
      <div className="projectsContainer">
        <h1>Our Projects</h1>
        <div className="branch">
          <div className="branch-reflection"></div>
          <div className="projectsList">
            {projectData.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                desc={project.desc}
                url={project.url}
                image={project.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
