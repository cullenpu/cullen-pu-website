import React from "react";
import { Link } from "react-scroll";

import "./styles.css";

const Home = () => {
  return (
    <div className="jumbotron-fluid bg-dark text-center" id="home">
      <div className="greeting">
        <h1 className="text-monospace text-light display-3">hi, i'm cullen!</h1>
        <h5 className="text-monospace text-light">
          i'm a student, software dev, photographer
        </h5>
      </div>
      <Link
        className="btn btn-outline-light text-monospace text-light"
        // activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={-56}
        duration={300}
      >
        view my work
      </Link>
      <div className="links">
        <a
          href="https://www.linkedin.com/in/cullenpu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin text-light"></i>
        </a>
        <a
          href="https://github.com/Cullenpu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github text-light"></i>
        </a>
        <a
          href="https://instagram.com/cpviews/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram text-light"></i>
        </a>
        <a
          href="mailto:cullepu@outlook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-envelope text-light"></i>
        </a>
      </div>
    </div>
  );
};

export default Home;
