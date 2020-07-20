import React from "react";
import logo from "../../assets/UMCOR.png";
import "./header.scss";
import search from "../../assets/Search.png";
import Line from "../../components/Line/Line";
import variables from "../../style/_variables.scss";
import Triangle from "../Triangle/Triangle";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="height-12 alc">
      <div className="width-13 jscac">
        <img src={logo} alt="logo" className="width-100 height-100" />
      </div>
      <div className="navigation bg-black height-100 ">
        <ul>
          <NavLink to="/">
            <li className="font-bb">Գլխավոր</li>
          </NavLink>
          <li>
            Մեր Մասին{" "}
            <div className="about_us_dropdown">
              <NavLink to="/history">
                <p className="about_dropdown_text">Պատմություն</p>
              </NavLink>
              <NavLink to="/mission">
                <p className="about_dropdown_text">Առաքելություն</p>
              </NavLink>
              <NavLink to="/strategy">
                <p className="about_dropdown_text">Ռազմավարություն</p>
              </NavLink>
              <NavLink to="/partners">
                <p className="about_dropdown_text">Գործընկերներ</p>
              </NavLink>
              <NavLink to="/staff">
                <p className="about_dropdown_text">Աշխատակազմ</p>
              </NavLink>
            </div>
          </li>
          <li>Ծրագրեր</li>
          <li>Նորություններ</li>
          <li>Նվիրատվություն</li>
          <li>Կապ</li>

          <div className="moving_triangle">
            <Triangle
              style={{
                backgroundColor: variables.redcolor,
                zIndex: 4,
              }}
            />
          </div>
          <Line
            style={{
              width: "70vw",
              height: "1.4vh",
              backgroundColor: "#ca3b17",
              top: "91.5%",
              left: "3%",
              transform: "translateY(-24%)",
              position: "absolute",
            }}
          />
        </ul>
        <div className="languages jscac">
          <div className="armenian">Հայ</div>
          <div className="english">Eng</div>
        </div>
        <div
          style={{
            width: "2.2vw",
            marginLeft: "1vw",
            padding: "0.4vw",
            paddingTop: "2vh",
          }}
        >
          <img src={search} alt="search" width="100%" />
        </div>
      </div>
    </nav>
  );
}
