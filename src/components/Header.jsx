import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import '../styles/header.css';
import ReactSwitch from 'react-switch'; // Ensure this is being used elsewhere
import DownloadCVButton from './DownloadCVButton';
import Aos from 'aos';

const Header = ({ toggleTheme, theme }) => {
  const [activeNav, setActiveNav] = useState('#home');
  const [isMenuVisible, setMenuVisibility] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveNav(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-50% 0% -50% 0%' }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (window.scrollY >= 10) header.classList.add('scroll-header');
      else header.classList.remove('scroll-header');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationLinks = ['home',"about", 'skills', 'portfolio', 'contact'];

  return (
    <header className="header" id={theme}>
      <nav className="nav ">
        <div className={isMenuVisible ? ' show-menu' : 'nav__menu'}>

          <ul  className="nav__list">
            {!isMenuVisible && (
              <div>

              <li className="nav__item">
                <a href="#home" onClick={() => setActiveNav('#home')}>
                  <img className="nav__logo" src="https://github.com/ToniRajamaki/folio2/blob/main/public/assets/toni/logo.png?raw=true" alt="Logo" />
                </a>
              </li>
              </div>
            )}

            <div className='nav-ul-links'>
            {navigationLinks.map((section, index, array) =>
              !(isMenuVisible && (index === 0 || index === array.length - 0)) ? (
                <li key={section} className="nav__item">
                  <Link to={section} spy={true} smooth={true} duration={0} className={activeNav === `#${section}` ? 'nav__link active-link' : 'nav__link'}>
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Link>
                </li>
              ) : null
              )}
              </div>
            {/* Conditionally render the last item (DownloadCVButton) based on `isMenuVisible` */}
            {!isMenuVisible && (
              <div>

              <li className="nav__item cv-button">
                <DownloadCVButton />
              </li>
              </div>
            )}
          </ul>

          <i className="uil uil-times nav__close" onClick={() => setMenuVisibility(!isMenuVisible)} aria-label="Close menu"></i>
        </div>
        <div  className="nav__toggle" onClick={() => setMenuVisibility(!isMenuVisible)} aria-label="Toggle menu">
          <i className="uil uil-apps" style={{ fontSize: '150%' }}></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
