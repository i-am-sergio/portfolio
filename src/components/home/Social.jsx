import React from "react";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/sergio-mogollon"
        className="home__social-icon"
        target="_blank"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/i-am-sergio"
        className="home__social-icon"
        target="_blank"
      >
        <FaGithub />
      </a>
      <a
        href="https://youtube.com"
        className="home__social-icon"
        target="_blank"
      >
        <FaYoutube />
      </a>
    </div>
  );
};

export default Social;
