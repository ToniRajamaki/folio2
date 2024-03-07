import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-scroll';
import DownloadCVButton from './DownloadCVButton';
import "../styles/footer.css";
import Contact from './Contact';

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
      <div className="wave1">

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 230"><path fill="#fafafa" fill-opacity="1" d="M0,192L120,202.7C240,213,480,235,720,224C960,213,1200,171,1320,149.3L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
</div>
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
            Education
        </Link>
    </li>

    <li>
        <Link
            to="qualification"
            spy={true}
            smooth={true}
            duration={0}
            className="footer__link"
        >
            Experience
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
        <span className="footer__copy">© 2023, Toni Rajamäki</span>
      </div>
    </footer>
  );
};

export default Footer;
