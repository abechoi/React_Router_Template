import React from "react";


const ProjectDetails = ({project}) => {

  return (
    <section className="project-details">
      <h3 className="test-title">{ project.title }</h3>
    </section>
  )
}

export default ProjectDetails;