import React from "react";
import "./dashedtext.scss";

export default function DashedText({ children, ...props }) {
  return (
    <div className="dashed_text" {...props}>
      {children}
    </div>
  );
}
