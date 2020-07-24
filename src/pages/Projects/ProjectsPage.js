import React from "react";
import "./projectspage.scss";
import ProjectDiv from "../../components/ProjectDiv/ProjectDiv";
import image from "../../assets/1.jpg";
import Line from "../../components/Line/Line";
import Triangle from "../../components/Triangle/Triangle";
import variables from "../../style/_variables.scss";
import { Pagination } from "../../components/Pagination/Pagination";

const projects = [
  { image: image, text: "Առողջապահություն" },
  { image: image, text: "boxk" },
  { image: image, text: "boloki" },
  { image: image, text: "xiar" },
  { image: image, text: "pomidor" },
  { image: image, text: "kortofel" },
  { image: image, text: "tryufel" },
  { image: image, text: "badaktuc" },
  { image: image, text: "ishamexy" },
  { image: image, text: "tiranozavr" },
];

export default function ProjectsPage() {
  return (
    <div className="flex-column width-100 padding-t-25">
      <h1 className="font-h1 font-black font-br upper">Մեր Ծրագրերը</h1>
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
          marginBottom: "5vw",
          backgroundColor: variables.redcolor,
          transform: "rotateX(180deg)",
        }}
      />
      <div className="project_page_main_div">
        {projects.map((elem, index) => {
          return <ProjectDiv image={elem.image} text={elem.text} key={index} />;
        })}
      </div>
    </div>
  );
}
