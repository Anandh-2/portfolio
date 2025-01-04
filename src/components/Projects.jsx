import React from "react";
import ProjectBox from "./ProjectBox";
import logo from '../images/GitHub.jpg';

export default function Projects() {
  const projects = [
    {title: "Tic Tac Toe", description: "Tic Tac Toe game for fun.", image: logo, link:'https://github.com/Anandh-2/tic-tac-toe'},
    {title: "Colorify", description: "My first javascript project.", image: logo, link:'https://github.com/Anandh-2/Colorify'},
    {title: "Live Chat", description: "Live chat application.", image: logo, link:'https://github.com/Anandh-2/live-chat'},
    {title: "Random User", description: "Random user generator.", image: logo, link:'https://github.com/Anandh-2/random-user'},
    {title: "Feedback Collection", description: "This is the feedback collection system developed at CoderOne internship.", image: logo, link:'https://github.com/neerajbhasin-8055/Feedback-Collection-System'},
    {title: "Real Time Chat", description: "Real time chat application developed at CoderOne internship.", image: logo, link:'https://github.com/Asif-khan-this-is/Real-time-chat-application'},
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
