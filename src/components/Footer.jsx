import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <footer>
        <div id="socials">
          <a href="https://www.linkedin.com/in/anandhk/" target="_blank" rel="noreferrer noopener">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Anandh-2" target="_blank" rel="noreferrer noopener">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/anandh_k_02/" target="_blank" rel="noreferrer noopener">
            <FaInstagram />
          </a>
        </div>
        <p>Created by Anandh</p>
      </footer>
    </div>
  );
}
