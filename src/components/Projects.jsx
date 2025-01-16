import React from "react";
import ProjectBox from "./ProjectBox";
import logo from '../images/GitHub.jpg';
import ToDo from '../images/To-Do App.png';
import RUser from '../images/Random User.png';

export default function Projects() {
  const projects = [
    {title: "To-Do App", description: "My first full stack application.", image:ToDo ,link: "https://to-does.netlify.app/"},
    {title: "Random User Generator", description: "A random user generator application using Random User API.", image:RUser ,link: "https://get-randomuser.netlify.app/"},
    {title: "Real Time Chat", description: "Real time chat application developed at CoderOne internship.", image: logo, link:'https://github.com/Asif-khan-this-is/Real-time-chat-application'},
    {title: "Feedback Collection", description: "This is the feedback collection system developed at CoderOne internship.", image: logo, link:'https://github.com/neerajbhasin-8055/Feedback-Collection-System'},
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
