import React from "react";
import "./staffcard.scss";
import Line from "../Line/Line";
import variables from "../../style/_variables.scss";
import Triangle from "../Triangle/Triangle";

export default function StaffCard(props) {
  return (
    <div className="staff_single_card">
      <div className="staff_single_image">
        <img src={props.employee.image} alt="employee" width="90%" />
      </div>
      <Line
        style={{
          width: "100%",
          height: "0.7vw",
          backgroundColor: variables.yellowcolor,
        }}
      />
      <Triangle
        style={{
          backgroundColor: variables.yellowcolor,
          transform: "rotateX(180deg)",
          marginTop: "-0.1vw",
        }}
      />
      <p className="font-black upper font-bl font-medium mt-2">
        {props.employee.name} {props.employee.lastname}
      </p>
      <p className="font-black font-bl font-small mt-1">{props.employee.position}</p>
    </div>
  );
}
