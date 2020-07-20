import React from "react";
import Line from "../../../components/Line/Line";
import Triangle from "../../../components/Triangle/Triangle";
import variables from "../../../style/_variables.scss";
import DashedText from "../../../components/DashedText/DashedText";
import "./historypage.scss";

export default function HistoryPage() {
  return (
    <div>
      <div className="flex-column width-100 padding-t-25">
        <h1 className="font-h1 font-black font-br upper">Մեր Պատմությունը</h1>
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
        <DashedText
          style={{
            width: "54vw",
            marginTop: "2.5vw",
            padding: "1vw",
            marginBottom: "7vw",
          }}
        >
          <p className="font-medium font-bl">
            «ԱՄՔՈՐ» կազմակերպությունը Հայաստանում գոծունեություն է ծավալում 1994
            թվականից: Այս տարիների ընթացքում օգնության և զարգացման ծրագրեր են
            իրականցվել ողջ Հայաստանում: «ԱՄՔՈՐ»-ի առաքելությունն է նպաստել
            աղքատության վերացմանը և սոցիալ-տնտեսական զարգացմանը Հայաստանում
          </p>
        </DashedText>

        <div className="history_yellow_triangles">
          <div className="history_single_triangle">
            <p className="font-black font-date font-br">1940</p>
            <Triangle
              style={{
                width: "2vw",
                height: "1vw",
                marginBottom: "-0.07vw",
                backgroundColor: variables.yellowcolor,
              }}
            />
          </div>
          <div className="history_single_triangle">
            <p className="font-black font-date font-br">1994</p>
            <Triangle
              style={{
                width: "2vw",
                height: "1vw",
                marginBottom: "-0.07vw",
                backgroundColor: variables.yellowcolor,
              }}
            />
          </div>
          <div className="history_single_triangle">
            <p className="font-black font-date font-br">2000</p>
            <Triangle
              style={{
                width: "2vw",
                height: "1vw",
                marginBottom: "-0.07vw",
                backgroundColor: variables.yellowcolor,
              }}
            />
          </div>
          <div className="history_single_triangle">
            <p className="font-black font-date font-br">2020</p>
            <Triangle
              style={{
                width: "2vw",
                height: "1vw",
                marginBottom: "-0.07vw",
                backgroundColor: variables.yellowcolor,
              }}
            />
          </div>
        </div>

        <Line
          style={{
            width: "57vw",
            height: "0.7vw",
            backgroundColor: variables.yellowcolor,
          }}
        />
        <div className="history_yellow_triangles">
          <div className="himnadrum_single">
            <p className="font-black font-himnadrum font-br upper">
              Հիմնադրում
            </p>
            <p className="font-black font-medium">
              լոռեմ իպսում դոլոռ սիթ ամեթ,
            </p>
          </div>
          <div className="himnadrum_single">
            <p className="font-black font-himnadrum font-br upper">
              Հիմնադրում
            </p>
            <p className="font-black font-medium">
              լոռեմ իպսում դոլոռ սիթ ամեթ,
            </p>
          </div>
          <div className="himnadrum_single">
            <p className="font-black font-himnadrum font-br upper">
              Հիմնադրում
            </p>
            <p className="font-black font-medium">
              լոռեմ իպսում դոլոռ սիթ ամեթ,{" "}
            </p>
          </div>
          <div className="himnadrum_single">
            <p className="font-black font-himnadrum font-br upper">
              Հիմնադրում
            </p>
            <p className="font-black font-medium">
              լոռեմ իպսում դոլոռ սիթ ամեթ, նո
            </p>
          </div>
        </div>
        <DashedText
          style={{
            width: "54vw",
            marginTop: "7vw",
            padding: "1vw",
            marginBottom: "7vw",
          }}
        >
          <p className="font-medium font-bl">
            «ԱՄՔՈՐ» կազմակերպությունը Հայաստանում գոծունեություն է ծավալում 1994
            թվականից: Այս տարիների ընթացքում օգնության և զարգացման ծրագրեր են
            իրականցվել ողջ Հայաստանում: «ԱՄՔՈՐ»-ի առաքելությունն է նպաստել
            աղքատության վերացմանը և սոցիալ-տնտեսական զարգացմանը Հայաստանում
            «ԱՄՔՈՐ» կազմակերպությունը Հայաստանում գոծունեություն է ծավալում 1994
            թվականից: Այս տարիների ընթացքում օգնության և զարգացման ծրագրեր են
            իրականցվել ողջ Հայաստանում: «ԱՄՔՈՐ»-ի առաքելությունն է նպաստել
            աղքատության վերացմանը և սոցիալ-տնտեսական զարգացմանը Հայաստանում
            «ԱՄՔՈՐ» կազմակերպությունը Հայաստանում գոծունեություն է ծավալում 1994
            թվականից: Այս տարիների ընթացքում օգնության և զարգացման ծրագրեր են
            իրականցվել ողջ Հայաստանում: «ԱՄՔՈՐ»-ի առաքելությունն է նպաստել
            աղքատության վերացմանը և սոցիալ-տնտեսական զարգացմանը Հայաստանում
          </p>
        </DashedText>
      </div>
    </div>
  );
}
