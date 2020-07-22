import React from "react";
import "./projectdiv.scss";
import {Link} from 'react-router-dom'

export default function ProjectDiv(props) {
  return (
    <Link to={`/projects/${props.text}`}>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={props.image} alt="Avatar" width="100%" />
        </div>
        <div className="flip-card-back">
          <p className="font-yellow upper font-bl">{props.text}</p>
        </div>
      </div>
    </div>
    </Link>
  );
}
