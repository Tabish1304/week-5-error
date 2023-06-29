import React from "react";
import FooterLogo from "..//assets/Library.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row row-column">
          <Link to="/">
            <figure className="footer-logo">
              <img className="footer-logo-img" src={FooterLogo} alt="" />
            </figure>
          </Link>
          <div className="footer-list">
            <Link className="footer-link" to="/">
              Home
            </Link>
            <span className="footer-link no-cursor" to="/">
              About
            </span>
            <Link className="footer-link" to="/books">
              Books
            </Link>
            <Link className="footer-link" to="/cart">
              Cart
            </Link>
          </div>
          <div className="footer-copyright">Copyright &copy; 2021 Library</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
