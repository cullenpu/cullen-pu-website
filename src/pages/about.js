import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="container" id="about">
        <div className="row">
          <div className="col-md-6">
            <div
              id="portraits"
              className="carousel slide carousel-fade"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    src={require("../images/image1.jpg")}
                    alt="Image 1"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src={require("../images/image2.jpg")}
                    alt="Image 1"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src={require("../images/image3.jpg")}
                    alt="Image 1"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src={require("../images/image4.jpg")}
                    alt="Image 1"
                  />
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#portraits"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#portraits"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <h1>
              Hello! <br /> I'm Cullen.
            </h1>
            <p>
              I am currently a second year student at the University of Toronto
              dual majoring in computer science and statistics.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
