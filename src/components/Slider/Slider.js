import React from "react";
import "./slider.scss";
import Line from "../../components/Line/Line";
import variables from "../../style/_variables.scss";
import Triangle from "../../components/Triangle/Triangle";

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
    <div style={{ position: "relative" }}>
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
                className="fit-img"
                alt="slider-i"
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
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
      <div className="slide_bottom_line">
        <Triangle
          style={{
            position: "absolute",
            top: "96%",
            left: "50%",
            backgroundColor: variables.yellowcolor,
            transform: "translateX(-50%)",
            zIndex: 4,
          }}
        />

        <Line
          style={{
            position: "absolute",
            width: "50vw",
            height: "0.8vw",
            top: "99%",
            left: "50%",
            backgroundColor: variables.yellowcolor,
            transform: "translateX(-50%)",
            zIndex: 4,
          }}
        />
      </div>
    </div>
  );
}