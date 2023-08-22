import React, { useState, useEffect } from "react";
import "../styles/header.css";
import ReactSwitch from "react-switch";
import DownloadCVButton from "./DownloadCVButton";

const Header = ({ toggleTheme, theme }) => {
  const [activeNav, setActiveNav] = useState("#home");

  // Observer for sections in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveNav(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-50% 0% -50% 0%" } // Adjust rootMargin as needed
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  /* Change Background header */
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 10) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  /* toggle menu */
  const [Toggle, showMenu] = useState(false);

  return (
    <header className="header" id={theme}>
      <nav className="nav container">
        <a
          href="#home"
          onClick={() => setActiveNav("#home")}
          // className={
          //   activeNav === "#home" ? "nav__link active-link" : "nav__link"
          // }
        >
          <img className="nav__logo" src="https://github.com/ToniRajamaki/folio2/blob/main/public/assets/toni/logo.png?raw=true" alt="" />
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
                Home
              </a>
            </li>
  
            <li className="nav__item">
              <a
                href="#services"
                onClick={() => setActiveNav("#services")}
                className={
                  activeNav === "#services"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                Services
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
                Skills
              </a>
            </li>
  
            {/* Add more navigation items here */}
            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                Education
              </a>
            </li>
  
            <li className="nav__item">
              <a
                href="#qualification"
                onClick={() => setActiveNav("#qualification")}
                className={
                  activeNav === "#qualification"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                Experience
              </a>
            </li>
  
            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => setActiveNav("#portfolio")}
                className={
                  activeNav === "#portfolio"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                Portfolio
              </a>
            </li>
  
            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                Contact
              </a>
            </li>
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>
        <DownloadCVButton></DownloadCVButton>
        <div className="nav__toggle " onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
  
  
};

export default Header;
