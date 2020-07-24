import React from "react";
import Line from "../../../components/Line/Line";
import Triangle from "../../../components/Triangle/Triangle";
import variables from "../../../style/_variables.scss";
import "./staffpage.scss";
import img from "../../../assets/1.jpg";
import StaffCard from "../../../components/StaffCard/StaffCard";

const staff = [
  { image: img, name: "Անուն", lastname: "Ազգանուն", position: "Պաշտոն" },
  { image: img, name: "Անուն", lastname: "Ազգանուն", position: "Պաշտոն" },
  { image: img, name: "Անուն", lastname: "Ազգանուն", position: "Պաշտոն" },
  { image: img, name: "Անուն", lastname: "Ազգանուն", position: "Պաշտոն" },
  { image: img, name: "Անուն", lastname: "Ազգանուն", position: "Պաշտոն" },
  { image: img, name: "Անուն", lastname: "Ազգանուն", position: "Պաշտոն" },
  { image: img, name: "Անուն", lastname: "Ազգանուն", position: "Պաշտոն" },
  { image: img, name: "Անուն", lastname: "Ազգանուն", position: "Պաշտոն" },
  { image: img, name: "Անուն", lastname: "Ազգանուն", position: "Պաշտոն" },
];

export default function StaffPage() {
  return (
    <div>
      <div className="flex-column width-100 padding-t-25">
        <h1 className="font-h1 font-black font-br upper">Մեր Աշխատակազմը</h1>
        <Line
          style={{
            width: "29vw",
            height: "0.7vw",
            overflow: "hidden",
            borderRadius: "1vw",
            marginTop: "2vh",
            backgroundColor: variables.redcolor,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
        <Triangle
          style={{
            width: "2vw",
            height: "1vw",
            display: "flex",
            justifyContent: "center",
            marginTop: "-0.1vw",
            backgroundColor: variables.redcolor,
            transform: "rotateX(180deg)",
          }}
        />

        <div className="staff_cards">
          {staff.map((employee, index) => (
            <StaffCard key={index} employee={employee} />
          ))}
        </div>
      </div>
    </div>
  );
}
