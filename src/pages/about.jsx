import React from "react";

import CarouselItem from "components/CarouselItem.jsx";
import "./styles.css";
import aboutImages from "resources/json/about/aboutImages.json";
import aboutText from "resources/json/about/aboutText.json";

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
              {aboutImages.map((img, i) => {
                return (
                  <CarouselItem
                    key={i}
                    className={
                      i === 0 ? "carousel-item active" : "carousel-item"
                    }
                    src={require(`resources/images/portraits/${img.file}`).default}
                    photographer={img.photographer}
                    link={img.link}
                  />
                );
              })}
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
          <p className="about-me">{aboutText.about}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
