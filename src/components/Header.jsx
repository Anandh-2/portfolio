import React from "react";

export default function Header() {
  return (
    <header>
      <nav id="navbar">
        <ul id="navlist">
          <li>
            <h1 id="name">Anandh K</h1>
          </li>
          <li className="listelement">
            <a href="#home">Home</a>
          </li>
          <li className="listelement">
            <a href="#about">About</a>
          </li>
          <li className="listelement">
            <a href="#projects">Projects</a>
          </li>
          <li className="listelement">
            <a href="#skills">Skills</a>
          </li>
          <li className="listelement">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
