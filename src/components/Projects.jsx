import React from "react";
import ProjectBox from "./ProjectBox";
import logo from '../images/GitHub.jpg';
import ToDo from '../images/To-Do App.png';
import RUser from '../images/Random User.png';
// import TTT from '../images/Tic-Tac-Toe.jpg';
import lms from '../images/EaseLearn.png';
import weather from '../images/Weather.jpg';

export default function Projects() {
  const projects = [
    {title: "EaseLearn LMS", description: "A MERN stack LMS to manage courses and student progress.", image:lms, link:"https://easelearn-lms.netlify.app/"},
    {title: "Weather App", description:"A simple weather app using Open Weather API.",image:weather, link:"https://anandh-2.github.io/weather-app/"},
    {title: "Student Records", description:"Basic CRUD app using MERN stack.", image:logo, link:"https://stu-database.netlify.app/"},
    {title: "To-Do App", description: "My first full stack application.", image:ToDo ,link: "https://to-does.netlify.app/"},
    {title: "Random User Generator", description: "A random user generator application using Random User API.", image:RUser ,link: "https://get-randomuser.netlify.app/"}
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
