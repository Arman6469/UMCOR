import React from "react";
import "./footer.scss";
import insta from "../../assets/Insta.png";
import gmail from "../../assets/G.png";
import youtube from "../../assets/Youtube.png";
import facebook from "../../assets/FB.png";
import Line from "../../components/Line/Line";
import variables from "../../style/_variables.scss";

import Triangle from "../../components/Triangle/Triangle";

export default function Footer() {
  return (
    <div className="footer mt-12">
      <div className="red">
        <Line
          style={{
            width: "60vw",
            height: "0.7vw",
            backgroundColor: variables.redcolor,
            borderRadius: "1vw",
          }}
        />
        <Triangle style={{
          backgroundColor:variables.redcolor,
          transform: "rotateX(180deg)",
          marginTop: "-0.05vw"
        }} />
      </div>
      <div className="jscac mt-7 ">
        <div className="w-4 p-05">
          <img src={facebook} alt="facebook" width="100%" />
        </div>
        <div className="w-4 p-05">
          <img src={gmail} alt="gmail" width="100%" />
        </div>
        <div className="w-4 p-05">
          <img src={youtube} alt="gmail" width="100%" />
        </div>
        <div className="w-4 p-05">
          <img src={insta} alt="gmail" width="100%" />
        </div>
      </div>

      <div className="jscac mt-7">
        <div className="footer_contact_us flex-column"></div>
      </div>
    </div>
  );
}
