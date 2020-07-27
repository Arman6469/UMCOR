import React, { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import Line from "../../../components/Line/Line";
import Triangle from "../../../components/Triangle/Triangle";
import variables from "../../../style/_variables.scss";
import AboutProject from "../../../components/AboutProject/AboutProject";
import { Pagination } from "../../../components/Pagination/Pagination";

const projects = [
  "Lorem ipsum dolor sit amet consectetur",
  "Lorem ipsum dolor sit amet consectetur",
  "Lorem ipsum dolor sit amet consectetur",
  "Lorem ipsum dolor sit amet consectetur",
  "Lorem ipsum dolor sit amet consectetur",
  "Lorem ipsum dolor sit amet consectetur",
  "Lorem ipsum dolor sit amet consectetur",
  "Lorem ipsum dolor sit amet consectetur",
  "Lorem ipsum dolor sit amet consectetur",
  "Lorem ipsum dolor sit amet consectetur",
  "Lorem ipsum dolor sit amet consectetur",
  "Lorem ipsum dolor sit amet consectetur",
];

export default function ProjectPage() {
  const [elNumInPage] = useState(11);
  const [currentPage, setCurrentPage] = useState(1);
  const productsInPage = useMemo(() => {
    return projects?.length
      ? projects.slice(
          (currentPage - 1) * elNumInPage,
          elNumInPage * currentPage
        )
      : [];
  }, [projects, elNumInPage, currentPage]);

  return (
    <div>
      <div className="flex-column width-100 padding-t-25">
        <h1 className="font-h1 font-black font-br upper" id="title">{useParams().id}</h1>
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

        {productsInPage.map((project, index) => {
          return <AboutProject project={project} key={index} />;
        })}

        <Pagination
          length={Math.ceil(projects.length / elNumInPage)}
          handleChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
}
