import React, { useState } from "react";
import { GrMenu } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
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
          <li id="menu-button" onClick={() => setIsOpen((prev) => !prev)}>
            <GrMenu />
          </li>
        </ul>
      </nav>
      {isOpen && (
        <div className="sidebar">
          <ul>
            <li className="sidebar-list">
              <a href="#home">Home</a>
            </li>
            <li className="sidebar-list">
              <a href="#about">About</a>
            </li>
            <li className="sidebar-list">
              <a href="#projects">Projects</a>
            </li>
            <li className="sidebar-list">
              <a href="#skills">Skills</a>
            </li>
            <li className="sidebar-list">
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div id="sidebar-footer">
            <a
              href="https://www.linkedin.com/in/anandhk/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Anandh-2"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/anandh_k_02/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
