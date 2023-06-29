import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";

import Logo from "..//assets/Library.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  function OpenMenu(){
    document.body.classList += " menu-open";
  }

  function closeMenu(){
    document.body.classList.remove( " menu-open")
  }
  return (
    <nav>
      <div className="nav-container">
        <Link to="/">
          <img className="logo" src={Logo} alt="" />
        </Link>
        <ul className="nav-links">
          <li className="nav-list">
            <Link className="nav-link " to ="/">
              Home
            </Link>
          </li>
          <li className="nav-list">
            <Link to="/books" className="nav-link nav-link-primary">
              Books
            </Link>
          </li>
          <button className="btn-menu" onClick={OpenMenu}>
            <FontAwesomeIcon icon={faCartShopping} />
          </button>
          <li className="nav-icon">
            <Link className="nav-link" to ="/cart">
              Cart
            </Link>
            <span className="cart-length">2</span>
          </li>
        </ul>

        <div className="menu-backdrop">
          <button className="btn-menu btn-menu-close" onClick={closeMenu}>
            {/* <FontAwesomeIcon icon="times" /> */}
            <FontAwesomeIcon icon={faBars} />
          </button>
          <ul className="menu-links">
            <li className="menu-list">
              <Link to ="/" className="menu-link">
                Home
              </Link>
            </li>
            <li className="menu-list">
              <Link to ="/books" className="menu-link">
                Books
              </Link>
            </li>
            <li className="menu-list">
              <Link to ="/cart" className="menu-link">
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
