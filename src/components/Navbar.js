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

                <a className="navbar-item">
                  About
                </a>

                <div className="navbar-item has-dropdown is-hoverable">
                  <a className="navbar-link">
                    More
                  </a>

                  <div className="navbar-dropdown">
                    <a className="navbar-item" href = "https://github.com/MarkVictorio?tab=repositories">
                      My Github Repository
                    </a>
                    <a className="navbar-item">
                      Contact
                    </a>
                    <hr className="navbar-divider" />
                    <a className="navbar-item">
                      Report an issue
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </nav>
        )
    
}

export default Navbar
