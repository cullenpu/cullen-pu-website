import React, { Component } from "react";
import { Link } from "react-scroll";

class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            Home
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav ml-auto">
              <Link
                className="nav-item nav-link"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                About
              </Link>
              <Link
                className="nav-item nav-link"
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Projects
              </Link>
              <Link
                className="nav-item nav-link"
                activeClass="active"
                to="resume"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Resume
              </Link>
              <a
                className="nav-item nav-link"
                href="https://cullenpu.myportfolio.com"
                target="_blank"
              >
                Gallery
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
