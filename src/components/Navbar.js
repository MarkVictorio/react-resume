import React, { useState } from 'react';

function Navbar() {
  const [isActive, setisActive] = useState(false);
        return (
          <nav className="navbar is-white" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
              <a className="navbar-item" href="/">
                <h1 className = "title is-size-4 has-text-primary"> OnTheMark</h1>
              </a>

              <a onClick={() => { setisActive(!isActive);}} role="button"
                className="navbar-burger" aria-label="menu" aria-expanded="false"
                data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>

            <div id="navbarBasicExample"className={`navbar-menu ${isActive ? "is-active" : ""}`}>
              <div className="navbar-start">
                <a className="navbar-item">
                  Home
                </a>

                <a className="navbar-item" href="#about-me">
                  About
                </a>

              </div>

            </div>
          </nav>
        )
    
}

export default Navbar;
