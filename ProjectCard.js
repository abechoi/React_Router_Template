import React from "react";
import { Link } from "react-router-dom";


const ProjectCard = ({project}) => {

  return (
    <Link to={project.url}>
      <li className="project-card">
        <h3>{ project.title }</h3>
        <p>{ project.createdAt }</p>
        <p>{ project.info }</p>
      </li>
    </Link>
  )
}

export default ProjectCard;