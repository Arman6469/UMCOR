import React from "react";
import "./footer.scss";
import Line from "../../components/Line/Line";
import variables from "../../style/_variables.scss";
import Call from "../../assets/Call.png";
import Mail from "../../assets/Mail.png";
import Address from "../../assets/Address.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faGooglePlusG,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import Triangle from "../../components/Triangle/Triangle";

export default function Footer() {
  return (
    <div className="footer mt-12">
      <div className="red">
        <Line
          style={{
            width: "57vw",
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
      <div className="footer_icons">
        <div className="footer_icon" id="facebook">
          <FontAwesomeIcon icon={faFacebookF} />
        </div>
        <div className="footer_icon" id="facebook">
          <FontAwesomeIcon icon={faGooglePlusG} />
        </div>
        <div className="footer_icon" id="facebook">
          <FontAwesomeIcon icon={faYoutube} />
        </div>
        <div className="footer_icon">
          <FontAwesomeIcon icon={faInstagram} />
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17240.6154188469!2d44.5193408499698!3d40.19262113797574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd28d9179213%3A0x56bcd80b4cda5c8f!2s16%20Karapet%20Ulnetsi%20St%2C%20Yerevan%2C%20Armenia!5e0!3m2!1sen!2s!4v1596012982606!5m2!1sen!2s"
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

      <p className="font-white font-small font-bl mt-2 mb-3">
        &copy; 2020 Innovation Ethnic Regional Center. All Rights Reserved
      </p>
    </div>
  );
}
