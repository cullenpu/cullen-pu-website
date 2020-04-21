import React from "react";
import { Link, animateScroll } from "react-scroll";

import "./navStyles.css";

const Nav = (props) => {
  const scrollToTop = () => {
    animateScroll.scrollToTop({ duration: 300 });
  };

  return (
    <div className="layout">
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark py-0">
        <button
          className="navbar-toggler my-2"
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
            <button className="home-button nav-item nav-link" onClick={scrollToTop}>
              <p>home</p>
            </button>
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
              href="https://drive.google.com/file/d/1ACOj-AIfpb-f0pXT0Wjdv7h5HczYNfZI/view?usp=sharing"
              className="nav-item nav-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              resume
            </a>
            <a
              href="https://cullenpu.myportfolio.com"
              className="nav-item nav-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>gallery</p>
            </a>
          </div>
        </div>
      </nav>
      {props.children}
      <p className="copyright text-center">made by cullen pu © 2020</p>
    </div>
  );
};

export default Nav;
