import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="header-wrap">
      <header>
        <div className="container">
          <div className="logo">

            <Link to="/">
              <img src="assets/images/logo.svg" alt="Real Estate" className="logo-image" />
            </Link>

          </div>

          <button className="menu-toggle">
            <i className="ri-menu-fill bar-icon"></i>
            <i className="ri-close-fill close-icon"></i>
          </button>
          <div className="header-right">
            <div className="menu">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/properties">Properties</Link>
                </li>
                <li>
                  <a href="#">Agents</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>

            <div className="cta">
              <a href="#" className="btn btn-outline-primary">
                Log in
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
