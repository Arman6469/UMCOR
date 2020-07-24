import React from "react";
import "./aboutproject.scss";
import { Link } from "react-router-dom";

export default function AboutProject(props) {
  return (
    <Link to={``}>
      <div className="about_project_main">
        <div className="about_project_triangle"></div>
        <p className="font-black font-br">{props.project}</p>
      </div>
    </Link>
  );
}
