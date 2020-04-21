import React from "react";

import "./carouselItemStyles.css";

const CarouselItem = ({ className, src, photographer, link }) => {
  return (
    <div className={className}>
      <img
        className="d-block w-100"
        src={src}
        alt={"Photo creds: " + photographer}
      />
      <p className="photo-cred carousel-caption">
        Photo taken by {photographer}. Check out his work{" "}
        <a href={link} target="_blank" rel="noopener noreferrer">
          here
        </a>
        .
      </p>
    </div>
  );
};

export default CarouselItem;
