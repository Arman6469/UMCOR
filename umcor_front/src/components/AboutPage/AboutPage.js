import React from "react";
import Line from "../Line/Line";
import './aboutpage.scss'
import Triangle from "../Triangle/Triangle";
import variables from "../../style/_variables.scss";
import DashedText from "../../components/DashedText/DashedText";
import img1 from "../../assets/1.jpg";

export default function AboutPage({ children, ...props }) {
  return (
    <div>
      <div className="flex-column width-100 padding-t-25">
        <h1 className="font-h1 font-black font-br upper">
          Մեր Ռազմավարությունը
        </h1>
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
        <DashedText
          style={{
            width: "54vw",
            marginTop: "5vh",
            padding: "1vw",
          }}
        >
          {children}
        </DashedText>

        <div className="about_page_image">
          <Line
            style={{
              position: "absolute",
              height: "0.7vw",
              width: "50%",
              backgroundColor: variables.yellowcolor,
              left: "50%",
              top: '-1%',
              transform: "translateX(-50%)",
            }}
          />
          <img src={img1} alt="about_image" width="100%" />
        </div>
      </div>
    </div>
  );
}
