import React, { Component } from "react";
import { Link, animateScroll } from "react-scroll";

import "./navStyles.css";

class Nav extends Component {
  scrollToTop = () => {
    animateScroll.scrollToTop({ duration: 300 });
  };

  render() {
    return (
      <div>
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark py-0">
          <button
            class="navbar-toggler my-2"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav ml-auto">
              <a className="nav-item nav-link" onClick={this.scrollToTop}>
                <p>home</p>
              </a>
              <Link
                className="nav-item nav-link"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-56}
                duration={300}
              >
                <p>about</p>
              </Link>
              <Link
                className="nav-item nav-link"
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-56}
                duration={300}
              >
                <p>projects</p>
              </Link>
              <a
                href={require("../resources/resume/Resume.pdf")}
                className="nav-item nav-link"
                target="_blank"
              >
                resume
              </a>
              <a
                href="https://cullenpu.myportfolio.com"
                className="nav-item nav-link"
                target="_blank"
              >
                <p>gallery</p>
              </a>
            </div>
          </div>
        </nav>
        {this.props.children}
      </div>
    );
  }
}

export default Nav;