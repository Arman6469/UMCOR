import React from "react";
import "./homepage.scss";
import { NavLink } from "react-router-dom";
import NewsCard from "../../components/NewsCard/NewsCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp } from "@fortawesome/free-solid-svg-icons";
import img1 from "../../assets/1.jpg";
import variables from "../../style/_variables.scss";
import Line from "../../components/Line/Line";
import Triangle from "../../components/Triangle/Triangle";
import DashedText from "../../components/DashedText/DashedText";

const news = [
  {
    img: img1,
    value: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa qui",
    id: 1,
  },
  {
    img: img1,
    value: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa qui",
    id: 9,
  },
  {
    img: img1,
    value: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa qui",
    id: 2,
  },
];

export default function HomePage() {
  return (
    <div>
      <section className="welcome">
        <h2 className="font-h1 font-black font-br upper" id="title">Բարի գալուստ</h2>
        <p className="font-large font-black upper" >
          «Ամքոր» Հայաստան հիմնադրամ
        </p>
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
          }}
        >
          <p className="font-medium font-bl">
            «ԱՄՔՈՐ» կազմակերպությունը Հայաստանում գոծունեություն է ծավալում 1994
            թվականից: Այս տարիների ընթացքում օգնության և զարգացման ծրագրեր են
            իրականցվել ողջ Հայաստանում: «ԱՄՔՈՐ»-ի առաքելությունն է նպաստել
            աղքատության վերացմանը և սոցիալ-տնտեսական զարգացմանը Հայաստանում՝
            ապահովելով Հայաստանի անցումը դեպի առողջ և բարեկեցիկ քաղաքացիական
            հասարակության: Կազմակերպության կողմից իրականացված բոլոր ծրագրերն
            ուղղված են բնակչության խոցելի խավերի իրավիճակի բարելավմանը. այդպիսի
            ծրագրերի շարքին են դասվում թրաֆիքինգի դեմ պայքարի, առողջապահական
            ծրագրերի, կանանց հզորացմանը, գյուղատնտեսության զարգացմանն ուղղված
            ծրագրերը: Կազմակերպության կողմից իրականացված բոլոր ծրագրերն ուղղված
            են բնակչության խոցելի խավերի իրավիճակի բարելավմանը. այդպիսի ծրագրերի
            շարքին են դասվում թրաֆիքինգի դեմ պայքարի, առողջապահական ծրագրերի,
            կանանց հզորացմանը, գյուղատնտեսության զարգացմանն ուղղված ծրագրերը:
            Կազմակերպության կողմից իրականացված բոլոր ծրագրերն ուղղված են
            բնակչության խոցելի խավերի իրավիճակի բարելավմանը. այդպիսի ծրագրերի
            շարքին են դասվում թրաֆիքինգի դեմ պայքարի,
          </p>
        </DashedText>
      </section>
      <div className="home_news_title">
        <h3 className="font-large upper font-bl">Նորություններ</h3>
        <Line
          style={{
            width: "12vw",
            height: "0.6vw",
            overflow: "hidden",
            borderRadius: "1vw",
            display: "flex",
            backgroundColor: variables.redcolor,
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      </div>
      <section className="flex-column mt-5 pos-relative">
        <div className="jsb" style={{ width: "56vw" }}>
          {news.map((elem, index) => {
            return <NewsCard elem={elem} key={index} />;
          })}
        </div>
        <NavLink to="/news">
          <div className="news_seemore upper font-small font-bl font-white mt-10">
            Տեսնել բոլորը <FontAwesomeIcon icon={faSortUp} rotation={90} />
          </div>
        </NavLink>
      </section>
    </div>
  );
}
