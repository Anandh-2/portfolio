import React from "react";
import photo from "../images/Photo.jpg";

export default function About() {
  return (
    <section id="about">
      <h1>About Me</h1>
      <div id="about-content">
        <div id="about-me">
          <p>
              I am a passionate coder. Currently pursuing an engineering degree in Electronics and Communication Engineering. 
              I am a self-taught web developer. I have a strong foundation in Java, C Programming and Data Structures.  
              And also well-versed in full stack development. I have worked with MERN stack and currently exploring Spring Boot.
          </p>
          <div id="about-details">
            <div id="education">
              <h3>Education</h3>
              <ul>
                <li>BE ECE | 7.9 CGPA</li>
                <li>HSC | 90.5%</li>
              </ul>
            </div>
            <div id="internships">
              <h3>Internships</h3>
              <ul>
                <li>
                  Zoho - Technical Trainee: <p>Got exposure to Networking and Endpoint Management.</p>
                </li>
                <li>
                  CoderOne - Web Developer: <p>Gained hands-on experience in full stack development.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="about-photo">
          <img id="profile" src={photo} alt="profile" />
        </div>
      </div>
    </section>
  );
}
