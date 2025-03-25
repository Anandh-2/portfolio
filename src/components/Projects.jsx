import React from "react";
import ProjectBox from "./ProjectBox";
import logo from '../images/GitHub.jpg';
import ToDo from '../images/To-Do App.png';
import RUser from '../images/Random User.png';
import TTT from '../images/Tic-Tac-Toe.jpg';

export default function Projects() {
  const projects = [
    {title: "Learning Management System (Ongoing)", description: "A MERN stack LMS to manage courses and student progress.", image:logo, link:"https://github.com/Anandh-2/Learning-management-system"},
    {title: "To-Do App", description: "My first full stack application.", image:ToDo ,link: "https://to-does.netlify.app/"},
    {title: "Random User Generator", description: "A random user generator application using Random User API.", image:RUser ,link: "https://get-randomuser.netlify.app/"},
    {title: "Tic Tac Toe", description: "Have fun with tic-tac-toe game.", image: TTT, link: "https://tic-tac-toe-anandh.netlify.app/"}
  ];
  return (
    <section id="projects">
      <h1>Projects</h1>
      <div id="project-boxes">
        {projects.map((project, index) => (
          <ProjectBox key={index} project={project}/>
        ))}
        </div>
    </section>
  );
}
