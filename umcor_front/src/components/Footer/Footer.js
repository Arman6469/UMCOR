import React from "react";
import "./footer.scss";
import insta from "../../assets/Insta.png";
import gmail from "../../assets/G.png";
import youtube from "../../assets/Youtube.png";
import facebook from "../../assets/FB.png";
import Line from "../../components/Line/Line";
import variables from "../../style/_variables.scss";
import Call from "../../assets/Call.png";
import Mail from "../../assets/Mail.png";
import Address from "../../assets/Address.png";

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
        <Triangle
          style={{
            backgroundColor: variables.redcolor,
            transform: "rotateX(180deg)",
            marginTop: "-0.1vw",
          }}
        />
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

      <div className="footer_main_part">
        <div className="footer_contact_us ">
          <h3 className="font-white font-large font-br letter-spacing-007 mb">
            Contact Us
          </h3>
          <Line
            style={{
              width: "7vw",
              height: "0.5vw",
              backgroundColor: variables.yellowcolor,
              marginBottom: "2vw",
            }}
          />
          <div className="contact_info">
            <div className="w-10">
              <img src={Call} alt="phone" width="100%" />
            </div>
            <div className="w-80 alc">
              <p className="font-white font-br font-medium">+374 00 00 00 00</p>
            </div>
          </div>
          <div className="contact_info">
            <div className="w-10">
              <img src={Mail} alt="phone" width="100%" />
            </div>
            <div className="w-80 alc">
              <p className="font-white font-br font-medium">info@example.am</p>
            </div>
          </div>
          <div className="contact_info">
            <div className="w-10">
              <img src={Address} alt="phone" width="100%" />
            </div>
            <div className="w-80 alc">
              <p className="font-white font-br font-medium">
                Կարապետ Ուլնեցու 16, Երևան, ՀՀ
              </p>
            </div>
          </div>
        </div>
        <div className="footer_map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24387.131069514504!2d44.4949130759498!3d40.178102570626976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abcf93707fda9%3A0xf6af0855c564d29c!2sKentron%2C%20Yerevan%2C%20Armenia!5e0!3m2!1sen!2s!4v1594882814745!5m2!1sen!2s"
            width="70%"
            title="map"
            height="80%"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
          ></iframe>
        </div>
      </div>

      <Line
        style={{
          width: "25%",
          height: "0.5vw",
          backgroundColor: variables.yellowcolor,
        }}
      />

      <p className="font-white font-small font-bl mt-2 mb-3" >&copy; 2020 Innovation Ethnic Regional Center. All Rights Reserved</p>
    </div>
  );
}
