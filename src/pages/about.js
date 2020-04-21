import React from "react";

import CarouselItem from "../components/CarouselItem";

import "./styles.css";

const aboutMe = `I am a second year computer science and statistics student \
attending the University of Toronto, previously from Boston.

This summer, I wrote code for LLX Solutions, a pharmaceutical company in Waltham, \
Massachusetts. I also serve as a Department of Computer Science Ambassador at the \
University of Toronto.

I have a diverse collection of interests which include boba, clothing, and \
photography - feel free to check out my photography portfolio linked above!`;

const About = () => {
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
              <CarouselItem
                className="carousel-item active"
                src={require("../resources/portraits/image1.jpg")}
                photographer="Cody Tu"
                link="https://codytu.com/"
              />
              <CarouselItem
                className="carousel-item"
                src={require("../resources/portraits/image2.jpg")}
                photographer="Cody Tu"
                link="https://codytu.com/"
              />
              <CarouselItem
                className="carousel-item"
                src={require("../resources/portraits/image3.jpg")}
                photographer="Cody Tu"
                link="https://codytu.com/"
              />
              <CarouselItem
                className="carousel-item"
                src={require("../resources/portraits/image4.jpg")}
                photographer="Mareck Damiano"
                link="https://www.instagram.com/mareckd/"
              />
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
          <h1 className="section text-center">about</h1>
          <p className="about-me">{aboutMe}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
