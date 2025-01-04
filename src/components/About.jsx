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
            I am a self-taught web developer. I have a good understanding of HTML, CSS, JavaScript, and React. Hence a wellversed frontend developer. 
            I also have strong foundations in C, Java, and Data Structures. And also started learning backend development. 
          </p>
          <div id="about-details">
            <div id="education">
              <h3>Education</h3>
              <ul>
                <li>BE ECE || 8 CGPA</li>
                <li>HSC || 90.5%</li>
              </ul>
            </div>
            <div id="internships">
              <h3>Internships</h3>
              <ul>
                <li>
                  CoderOne: <p>Two month internship on web development.</p>
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
