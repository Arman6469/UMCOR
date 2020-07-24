import React, { useState } from "react";
import "./pagination.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";


export const Pagination = ({ length, handleChange }) => {
  const [active, setActive] = useState(1);
  const change = (num) => {
    if (num > length || num < 1) return;
    setActive(num);
    handleChange(num);
  };

  return length <= 1 ? (
    " "
  ) : (
    <div className="jscac pagination ">
      <div
        className="pagination-item font-bb bg-yellow font-white jscac "
        onClick={() => change(active - 1)}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
      {new Array(length).fill(" ").map((a, idx) => {
        return (
          <div
            key={idx}
            className={`border-circle mr-1 jscac pa-2 font-bb pagination-item ${
              active === idx + 1 ? "bg-blue font-white" : "bg-yellow font-white"
            }`}
            onClick={() => change(idx + 1)}
          >
            <span className="h3">{idx + 1}</span>
          </div>
        );
      })}
      <div
        className="pagination-item jscac font-bb bg-yellow font-white "
        onClick={() => change(active + 1)}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </div>
  );
};
