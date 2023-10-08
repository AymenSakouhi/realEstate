import React from "react";

const NavBar = () => {
  return (
    <div className="header-wrap">
      <header>
        <div className="container">
          <div className="logo">
            <a href="#">
              <img src="assets/images/logo-tun.PNG" alt="Real Estate" />
            </a>
          </div>

          <button className="menu-toggle">
            <i className="ri-menu-fill bar-icon"></i>
            <i className="ri-close-fill close-icon"></i>
          </button>
          <div className="header-right">
            <div className="menu">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Properties</a>
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
