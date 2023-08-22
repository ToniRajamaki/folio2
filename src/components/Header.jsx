import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import '../styles/header.css';
import ReactSwitch from 'react-switch';
import DownloadCVButton from './DownloadCVButton';

const Header = ({ toggleTheme, theme }) => {
  const [activeNav, setActiveNav] = useState('#home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveNav(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-50% 0% -50% 0%' } // Adjust rootMargin as needed
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (this.scrollY >= 10) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
  });

  const [Toggle, showMenu] = useState(false);

  return (
    <header className="header" id={theme}>
      <nav className="nav container">
        <a href="#home" onClick={() => setActiveNav('#home')}>
          <img
            className="nav__logo"
            src="https://github.com/ToniRajamaki/folio2/blob/main/public/assets/toni/logo.png?raw=true"
            alt=""
          />
        </a>
  
        <div className={Toggle ? 'nav__menu show-menu' : 'nav__menu'}>
        <ul className="nav__list grid">
  <li className="nav__item">
    <Link
      to="home"
      spy={true}
      smooth={true}
      duration={500}
      className={
        activeNav === '#home' ? 'nav__link active-link' : 'nav__link'
      }
    >
      Home
    </Link>
  </li>
  <li className="nav__item">
    <Link
      to="services"
      spy={true}
      smooth={true}
      duration={500}
      className={
        activeNav === '#services' ? 'nav__link active-link' : 'nav__link'
      }
    >
      Services
    </Link>
  </li>
  <li className="nav__item">
    <Link
      to="skills"
      spy={true}
      smooth={true}
      duration={500}
      className={
        activeNav === '#skills' ? 'nav__link active-link' : 'nav__link'
      }
    >
      Skills
    </Link>
  </li>
  <li className="nav__item">
    <Link
      to="about"
      spy={true}
      smooth={true}
      duration={500}
      className={
        activeNav === '#about' ? 'nav__link active-link' : 'nav__link'
      }
    >
      Education
    </Link>
  </li>
  <li className="nav__item">
    <Link
      to="qualification"
      spy={true}
      smooth={true}
      duration={500}
      className={
        activeNav === '#qualification' ? 'nav__link active-link' : 'nav__link'
      }
    >
      Experience
    </Link>
  </li>
  <li className="nav__item">
    <Link
      to="portfolio"
      spy={true}
      smooth={true}
      duration={500}
      className={
        activeNav === '#portfolio' ? 'nav__link active-link' : 'nav__link'
      }
    >
      Portfolio
    </Link>
  </li>
  <li className="nav__item">
    <Link
      to="contact"
      spy={true}
      smooth={true}
      duration={500}
      className={
        activeNav === '#contact' ? 'nav__link active-link' : 'nav__link'
      }
    >
      Contact
    </Link>
  </li>
</ul>

          <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
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
