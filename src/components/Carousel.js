import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import "../sass/components/Carousel.scss";

const Carousel = ({ pictures }) => {
  const [current, setCurrent] = useState(0);
  const length = pictures.length;

  const previousPicture = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextPicture = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const ArrowRight = <FontAwesomeIcon icon={faChevronRight} />;
  const ArrowLeft = <FontAwesomeIcon icon={faChevronLeft} />;

  return (
    <div className="slider">
      <img
        className="slideImg"
        src={pictures[current]}
        alt={pictures.title}
        key={current}
      />

      {length > 1 && (
        <div className="leftArrow" onClick={previousPicture}>
          {ArrowLeft}
        </div>
      )}

      <div className="slideCounter">
        {current + 1}/{length}
      </div>

      {length > 1 && (
        <div className="rightArrow" onClick={nextPicture}>
          {ArrowRight}
        </div>
      )}
    </div>
  );
};

export default Carousel;
