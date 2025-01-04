import React from "react";

export default function ProjectBox(project) {
  return (
    <a href={project.project.link} id="project-box">
        <h4>{project.project.title}</h4>
        <img src={project.project.image} alt={project.project.title}/>
        <p>{project.project.description}</p>
    </a>
  );
}
