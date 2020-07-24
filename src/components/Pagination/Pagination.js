import React, { useState } from "react";
import "./pagination.scss";

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
    <div className="d-flex align-center justify-center pagination py-2">
      <div
        className="pagination-item pa-2 text-bold mr-1 h3 d-flex align-center justify-center border-circle"
        onClick={() => change(active - 1)}
      >
        <i className="fas fa-chevron-left"></i>
      </div>
      {new Array(length).fill(" ").map((a, idx) => {
        return (
          <div
            key={idx}
            className={`border-circle mr-1 d-flex align-center justify-center pa-2 text-bold pagination-item ${
              active === idx + 1 ? "bg-orange text-white" : ""
            }`}
            onClick={() => change(idx + 1)}
          >
            <span className="h3">{idx + 1}</span>
          </div>
        );
      })}
      <div
        className="pagination-item mr-1 d-flex align-center justify-center pa-2 text-bold border-circle"
        onClick={() => change(active + 1)}
      >
        <i className="fas fa-chevron-right h3"></i>
      </div>
    </div>
  );
};
