import React from "react";
import "./footer.scss";
import insta from "../../assets/Insta.png";
import gmail from "../../assets/G.png";
import youtube from "../../assets/Youtube.png";
import facebook from "../../assets/FB.png";

export default function Footer() {
  return (
    <div className="footer mt-28">
      <div className="red">
        <div className="footer_red_line"></div>
        <div className="footer_red_triangle"></div>
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
          <div className="footer_contact_us flex-column">
                
          </div>
      </div>
    </div>
  );
}
