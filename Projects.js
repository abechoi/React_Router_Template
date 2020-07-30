import React from 'react';
import projects from "./data/projects";
import { Switch, Route, Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section>
    

      <h1>PROJECTS</h1>
      <ul className="projects-grid">
        { projects.map((project) => (
          
          <ProjectCard project={project}/>

 
        ))}
      </ul>


    </section>
  );
}

export default Projects;