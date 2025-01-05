import React from "react";

export default function ProjectBox(project) {
  return (
    <a href={project.project.link} id="project-box" target="_blank" rel="noreferrer noopener">
        <h4>{project.project.title}</h4>
        <img src={project.project.image} alt={project.project.title}/>
        <p>{project.project.description}</p>
    </a>
  );
}
