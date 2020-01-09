import React, { Component } from "react";
import { Link, animateScroll } from "react-scroll";

import "./styles.css";

class Home extends Component {
  render() {
    return (
      <div className="jumbotron-fluid bg-dark" id="home">
        <div className="container text-center">
          <h1 className="text-monospace text-light display-3 greeting">
            hi, i'm cullen!
          </h1>
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
        </div>
      </div>
    );
  }
}

export default Home;
