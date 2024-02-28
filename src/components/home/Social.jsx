import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/sergio-mogollon"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-linkedin"></i>
      </a>
      <a
        href="https://github.com/i-am-sergio"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-github-alt"></i>
      </a>
      <a
        href="https://youtube.com"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-youtube"></i>
      </a>
    </div>
  );
};

export default Social;
