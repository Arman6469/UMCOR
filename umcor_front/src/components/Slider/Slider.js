import React from "react";
import "./slider.scss";
import yellow_line from "../../assets/YellowLineHort.png";
import yellow_triangle from "../../assets/YellowTriangle.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Slider({ sliderImages }) {
  const [position, setPosition] = React.useState(0);

  const goRight = () => {
    position === -100 * (sliderImages.length - 1)
      ? setPosition(0)
      : setPosition(position - 100);
  };
  const goLeft = () => {
    position === 0
      ? setPosition(-100 * (sliderImages.length - 1))
      : setPosition(position + 100);
  };

  return (
    <div>
      <div className="slider">
        {sliderImages.map((image, index) => {
          return (
            <div
              className="slide"
              key={index}
              style={{ transform: `translateX(${position}%)` }}
            >
              <img
                src={image}
                alt="slider-i"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          );
        })}

        <div className="slide-button-left" onClick={goLeft}>
          <FontAwesomeIcon icon={faChevronLeft} />{" "}
        </div>
        <div className="slide-button-right" onClick={goRight}>
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
      <div className="yellow_line">
        <img src={yellow_line} alt="line" width="100%" />
      </div>
      <div className="yellow_triangle">
        <img src={yellow_triangle} alt="triangle" width="100%" />
      </div>
    </div>
  );
}
