import { useState } from "react";
import { FaBars, FaRegUser, FaRegFileAlt } from "react-icons/fa";
import { FaFolderTree } from "react-icons/fa6";
import { IoBriefcaseOutline, IoMailOutline, IoClose } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
import "./header.css";

const Header = () => {
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if (scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });
  // Toggle Menu
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          SergioDev
        </a>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <AiOutlineHome className="uil uil-estate nav__icon"/>
                Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <FaRegUser className="uil uil-user nav__icon"/>
                About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <FaRegFileAlt className="uil uil-file-alt nav__icon"/>
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#projects"
                onClick={() => setActiveNav("#projects")}
                className={
                  activeNav === "#projects"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <IoBriefcaseOutline className="uil uil-briefcase-alt nav__icon"/>
                Projects
              </a>
            </li>
            <li className="nav__item">
              <a
                href="https://github.com/i-am-sergio"
                target="_blank"
                onClick={() => setActiveNav("#portfolio")}
                className={
                  activeNav === "#portfolio"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <FaFolderTree className="uil uil-scenery nav__icon"/>
                 Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link last"
                    : "nav__link last"
                }
              >
                <IoMailOutline className="uil uil-message nav__icon"/>
                Contact
              </a>
            </li>
          </ul>
          {/* <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i> */}
          <IoClose className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)} />
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          {/* <i className="uil uil-apps"></i> */}
          {/* <IoMdApps className="uil uil-apps"/> */}
          <FaBars className="uil uil-apps"/>
        </div>
      </nav>
    </header>
  );
};

export default Header;
