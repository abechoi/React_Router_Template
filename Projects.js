import React from 'react';
import projects from "./data/projects";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import ProjectDetails from "./ProjectDetails";

const Projects = () => {
  return (
    <section>

      <ul className="projects-grid">
        { projects.map((project) => (
          <ProjectCard project={project}/>
        ))}
      </ul>

      <Router>
        <Switch>
          { projects.map((project) => (

            <Route path={project.url}>
              <ProjectDetails project={project}/>
            </Route>
            
          ))}
        </Switch>   
      </Router>
    </section>
  );
}

export default Projects;