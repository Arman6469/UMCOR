import React from "react";
import "./donationpage.scss";
import Line from "../../components/Line/Line";
import Triangle from "../../components/Triangle/Triangle";
import variables from "../../style/_variables.scss";
import { useState } from "react";

export default function DonationPage() {
  const [currency, setCurrency] = useState("USD");
  console.log(currency);
  return (
    <div className="flex-column width-100 padding-t-25">
      <h1 className="font-h1 font-black font-br upper" id="title">Նվիրատվություն</h1>
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

      <div className="donation">
        <input type="text" className="donation_input font-large font-black " />
        <div className="donation_currency font-large font-white font-br">USD</div>
      </div>

      <div className="donation_size">
        <div className="donation_single_size font-large font-white font-br ">
          5
        </div>
        <div className="donation_single_size font-large font-white font-br">
          10
        </div>
        <div className="donation_single_size font-large font-white font-br">
          25
        </div>
        <div className="donation_single_size font-large font-white font-br">
          50
        </div>
        <div className="donation_single_size font-large font-white font-br">
          100
        </div>
        <div className="donation_single_size font-large font-white font-br">
          200
        </div>
      </div>

      <div className="donation_inputs_title">
        <p className="font-black font-large upper font-br">Ոլորտ</p>
        <Line
          style={{
            width: "5.5vw",
            height: "0.5vw",
            backgroundColor: variables.redcolor,
          }}
        />
        <select
          name="category"
          id="category"
          className="font-black font-bl font-small category_select"
        >
          <option value="health" className="font-black font-bl font-small">
            Առողջապահություն
          </option>
        </select>
      </div>
      <div className="donation_inputs_title">
        <p className="font-black font-large upper font-br">Թիրախ խումբ</p>
        <Line
          style={{
            width: "5.5vw",
            height: "0.5vw",
            backgroundColor: variables.redcolor,
          }}
        />
        <input
          type="text"
          className="font-black font-bl font-small category_select"
          placeholder="օր․՝ խոցելի խմբի երեխաներ"
        />
      </div>
      <div className="donation_inputs_title">
        <p className="font-black font-large upper font-br">
          Էլեկտրոնային հասցե
        </p>
        <Line
          style={{
            width: "5.5vw",
            height: "0.5vw",
            backgroundColor: variables.redcolor,
          }}
        />
        <input
          type="text"
          className="font-black font-bl font-small category_select"
          placeholder="օր․՝ info@example.com"
        />
      </div>

      <div className="donation_inputs_title">
        <div className="donation_submit_button upper font-white font-bl font-small">
          Հաստատել
        </div>
      </div>
    </div>
  );
}
