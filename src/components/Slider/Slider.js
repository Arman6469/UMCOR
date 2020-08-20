import React, {
  useState,
  useMemo,
  useRef,
  useCallback,
  useEffect,
} from "react";
import "./slider.scss";
import Line from "../../components/Line/Line";
import variables from "../../style/_variables.scss";
import Triangle from "../../components/Triangle/Triangle";
import SliderImage from "../../assets/SliderText.svg";
import Future from "../../assets/Future.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Dot from "../Dot/Dot";

export default function Slider({ sliderImages }) {
  const S = useRef();
  const swap = useCallback(
    (num) => {
      sliderImages?.length &&
        setActiveElem(
          (aImg) => (aImg + num + sliderImages?.length) % sliderImages?.length
        );
      clearInterval(S.current);
      S.current = setInterval(() => swap(1), 4000);
    },
    [sliderImages]
  );

  const [activeElem, setActiveElem] = useState(0);
  const position = useMemo(() => activeElem * -100, [activeElem]);

  const goRight = () => {
    swap(1);
  };
  const goLeft = () => {
    swap(-1);
  };
  useEffect(() => {
    S.current = setInterval(() => swap(1), 4000);
    return () => clearInterval(S.current);
  }, [swap]);

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
                src={image.image}
                className="fit-img"
                alt="nkar"
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
        <div className="slider_dots">
          {sliderImages.map((_, index) => {
            return (
              <Dot
                key={index}
                setActiveElem={(num) => {
                  clearInterval(S.current);
                  setActiveElem(num);
                  S.current = setInterval(() => swap(1), 4000);
                }}
                index={index}
                classes={index === activeElem ? "dot_active" : null}
              />
            );
          })}
        </div>
      </div>

      <div className="future_image">
        <img src={Future} alt="future" width="100%" />
      </div>
      <div className="slide_bottom_line">
        <Triangle
          style={{
            position: "absolute",
            top: "97%",
            left: "50%",
            backgroundColor: variables.yellowcolor,
            transform: "translateX(-50%)",
            zIndex: 4,
          }}
        />

        <Line
          style={{
            position: "absolute",
            width: "57vw",
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
