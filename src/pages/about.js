import React, { Component } from "react";

import "./styles.css";

class About extends Component {
  render() {
    return (
      <div className="container" id="about">
        <div className="row">
          <div className="col-md">
            <div
              id="portraits"
              className="carousel slide carousel-fade"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    src={require("../resources/portraits/image1.jpg")}
                  />
                  <p className="carousel-caption photo-cred">
                    Photo taken by Cody Tu. Check out his work{" "}
                    <a href="https://codytu.com/" target="_blank">
                      here
                    </a>
                    .
                  </p>
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src={require("../resources/portraits/image2.jpg")}
                  />
                  <p className="carousel-caption photo-cred">
                    Photo taken by Cody Tu. Check out his work{" "}
                    <a href="https://codytu.com/" target="_blank">
                      here
                    </a>
                    .
                  </p>
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src={require("../resources/portraits/image3.jpg")}
                  />
                  <p className="carousel-caption photo-cred">
                    Photo taken by Cody Tu. Check out his work{" "}
                    <a href="https://codytu.com/" target="_blank">
                      here
                    </a>
                    .
                  </p>
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src={require("../resources/portraits/image4.jpg")}
                  />
                  <p className="carousel-caption photo-cred">
                    Photo taken by Mareck Damiano. Check out his work{" "}
                    <a
                      href="https://www.instagram.com/mareckd/"
                      target="_blank"
                    >
                      here
                    </a>
                    .
                  </p>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#portraits"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#portraits"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div className="col-md">
            <h1 className="text-center section">about</h1>
            <p className="about-me">
              I am a second year computer science and statistics student
              attending the University of Toronto, previously from Boston.
              <br />
              <br />
              This summer, I wrote code for LLX Solutions, a pharmaceutical
              company in Waltham, Massachusetts. I also serve as a Department of
              Computer Science Ambassador at the University of Toronto.
              <br />
              <br />I have a diverse collection of interests which include boba,
              clothing, and photography - feel free to check out my photography
              portfolio linked above!
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
