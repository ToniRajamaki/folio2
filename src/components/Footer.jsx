import React from 'react';
import { Link } from 'react-scroll';
import DownloadCVButton from './DownloadCVButton';
import "../styles/footer.css";

const Footer = ({ theme }) => {
  return (
    <footer className="" id={theme}>
      <div className="footer__container">
        <h1 className="footer__title"></h1>

        <ul className="footer__list">
          <li>
            <Link
              to="home" // Changed to "home"
              spy={true}
              smooth={true}
              duration={500}
              className="footer__link"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="skills" // Changed to "skills"
              spy={true}
              smooth={true}
              duration={500}
              className="footer__link"
            >
              Skills
            </Link>
          </li>

          <li>
            <Link
              to="portfolio" // Updated the 'to' property to "projects"
              spy={true}
              smooth={true}
              duration={500}
              className="footer__link"
            >
              Projects
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
