import React from "react";
import "./dot.scss";

export default function Dot({ setActiveElem, index, classes }) {
  return (
    <div
      className={`slider_dot ${classes}`}
      onClick={() => setActiveElem(index)}
    ></div>
  );
}
