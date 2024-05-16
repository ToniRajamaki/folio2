import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-scroll';
import DownloadCVButton from './DownloadCVButton';
import "../styles/footer.css";
import Contact from './Contact';
import data from '../Animation - 1712483699794.json';

const Footer = ({ theme }) => {
  const [animate, setAnimate] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.5 } // This can be adjusted based on when you want the animation to start
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer ref={footerRef} className={`footer-animate ${theme}`} id={theme}>
      {animate && <div className="footer-circle"></div>}
      <div className="footer__container">
        <Contact/>
        <h1 className="footer__title"></h1>

        <ul className="footer__list">
    <li>
        <Link
            to="home"
            spy={true}
            smooth={true}
            duration={0}
            className="footer__link"
        >
            Home
        </Link>
    </li>

    <li>
        <Link
            to="skills"
            spy={true}
            smooth={true}
            duration={0}
            className="footer__link"
        >
            Skills
        </Link>
    </li>

    <li>
        <Link
            to="about"
            spy={true}
            smooth={true}
            duration={0}
            className="footer__link"
        >
            About
        </Link>
    </li>

   

    <li>
        <Link
            to="portfolio"
            spy={true}
            smooth={true}
            duration={0}
            className="footer__link"
        >
            Portfolio
        </Link>
    </li>
</ul>


      {/* <DownloadCVButton className="footer__copy"></DownloadCVButton> */}
      <div class="flex flex-col space-y-10 justify-center m-10">

 

    <div class="flex justify-center space-x-5 z-10" data-aos="zoom-in"  data-aos-delay="1000" data-aos-duration="300">
        <a href="https://github.com/ToniRajamaki" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.iconscout.com/icon/free/png-256/free-github-170-1175028.png?f=webp" 
            width={30}
            />
        </a>
        <a href="https://www.linkedin.com/in/toni-rajam%C3%A4ki-025055283/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
        </a>
    </div>
    <span className="footer__copy">© 2024, Toni Rajamäki</span>
</div>
      </div>

    </footer>
  );
};

export default Footer;
