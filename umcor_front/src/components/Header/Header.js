import React from "react";
import logo from "../../assets/UMCOR.png";
import "./header.scss";
import search from "../../assets/Search.png";
import red_line from "../../assets/RedLine.png";

export default function Header() {
  return (
    <nav className="height-12 alc">
      <div className="width-13 jscac pt-24">
        <img src={logo} alt="logo" className="width-100 height-100" />
      </div>
      <div className="navigation bg-black height-100 ">
        <ul className="jse ">
          <li className="font-bb">Գլխավոր</li>
          <li>Մեր Մասին</li>
          <li>Ծրագրեր</li>
          <li>Նորություններ</li>
          <li>Պատկերասրահ</li>
          <li>Նվիրատվություն</li>
          <li>Կապ</li>
        </ul>
        <div className="languages jscac">
          <div className="armenian">Հայ</div>
          <div className="english">Eng</div>
        </div>
        <div style={{ width: "2.2vw", marginLeft: "1vw", padding: '0.4vw', paddingTop: '2vh' }}>
          <img src={search} alt="search" width="100%" />
        </div>
      </div>

      <div className="red_line">
        <img src={red_line} alt="redline" width="100%" />
      </div>
    </nav>
  );
}
