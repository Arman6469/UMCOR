import React, { useMemo } from "react";
import Line from "../../../components/Line/Line";
import Triangle from "../../../components/Triangle/Triangle";
import variables from "../../../style/_variables.scss";
import DashedText from "../../../components/DashedText/DashedText";
import logo from "../../../assets/2.jpg";
import PartnerCard from "../../../components/PartnerCard/PartnerCard";

const partners = [
  { logo: logo, title: "Boloki" },
  { logo: logo, title: "Boloki" },
  { logo: logo, title: "Boloki" },
  { logo: logo, title: "Boloki" },
  { logo: logo, title: "Boloki" },
  { logo: logo, title: "Boloki" },
  { logo: logo, title: "Boloki" },
  { logo: logo, title: "Boloki" },
  { logo: logo, title: "Boloki" },
  { logo: logo, title: "Boloki" },
  { logo: logo, title: "Boloki" },
  { logo: logo, title: "Boloki" },
  { logo: logo, title: "Boloki" },
  { logo: logo, title: "Boloki" },
  { logo: logo, title: "Boloki" },
];

export default function PartnersPage() {
  const elemInRow = 5
  const customizedPartners = useMemo(() => {
    return partners.reduce((acc, employee, idx) => {
      if (idx % elemInRow === 0) acc.push([]);
      acc[acc.length - 1].push(employee);
      return acc;
    }, []);
  }, [partners, elemInRow]);

  return (
    <div className="flex-column width-100 padding-t-25">
      <h1 className="font-h1 font-black font-br upper">Մեր Գործընկերները</h1>
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
          marginBottom: "7vw",
          backgroundColor: variables.redcolor,
          transform: "rotateX(180deg)",
        }}
      />

      {customizedPartners.map((array, index) => {
        return (
          <DashedText
            key={index}
            style={{
              display: "flex",
              width: "57vw",
              marginBottom: "2vw",
            }}
          >
            {array.map((elem, i) => {
              return (
                <div key={i} className="partners_row">
                  <PartnerCard logo={elem.logo} title={elem.title} />
                </div>
              );
            })}
          </DashedText>
        );
      })}
    </div>
  );
}
