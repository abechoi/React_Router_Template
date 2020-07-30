import React from 'react';
import projects from "./data/projects";
import { Switch, Route, Link } from "react-router-dom";


const Projects = () => {
  return (
    <section>

      <h1>PROJECTS</h1>
      <ul className="projects-grid">
        { projects.map((project) => (


          <li className="project-card" key={project.id}>
            <h2>{ project.title }</h2>
            <p>{ project.createdAt }</p>
            <p>{ project.info }</p>
          </li>

 
        ))}
      </ul>

    </section>
  );
}

export default Projects;