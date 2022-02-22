import React, { useEffect } from "react";
import axios from "axios";

import CarouselItem from "components/CarouselItem.jsx";
import "./styles.css";

import aboutImages from "resources/json/about/aboutImages.json";

const META_URL = "https://cullen-pu-website-meta.herokuapp.com/meta";

const getAboutText = async () => {
  const res = await axios.get(META_URL);
  return res.data.about;
};

const About = () => {
  const [aboutText, setAboutText] = React.useState("");

  useEffect(() => {
    const fetchData = async () => {
      setAboutText(await getAboutText());
    };
    fetchData();
  }, []);

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
                    src={
                      require(`resources/images/portraits/${img.file}`).default
                    }
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
          <p className="about-me">{aboutText}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
