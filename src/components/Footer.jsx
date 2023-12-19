import "../styles/footer.css";

const Footer = ({ theme }) => {
  return (
    <footer className="" id={theme}>
      <div className="footer__container">
        <h1 className="footer__title"></h1>

        <ul className="footer__list ">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#testimonials" className="footer__link">
              Education
            </a>
          </li>
        </ul>

        <span className="footer__copy">© 2023, Toni Rajamäki </span>
      </div>
    </footer>
  );
};

export default Footer;
