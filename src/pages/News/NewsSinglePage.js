import React, { useState } from "react";
import "./newssinglepage.scss";
import Line from "../../components/Line/Line";
import NewsCard from "../../components/NewsCard/NewsCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp } from "@fortawesome/free-solid-svg-icons";
import Triangle from "../../components/Triangle/Triangle";
import variables from "../../style/_variables.scss";
import DashedText from "../../components/DashedText/DashedText";
import image1 from "../../assets/1.jpg";
import image2 from "../../assets/2.jpg";
import { NavLink } from "react-router-dom";

const carouselImages = [
  { id: 1, image: image1 },
  { id: 2, image: image2 },
  { id: 1, image: image1 },
  { id: 2, image: image2 },
];

const news = [
  {
    img: image1,
    value: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa qui",
    id: 1,
  },
  {
    img: image1,
    value: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa qui",
    id: 2,
  },
  {
    img: image1,
    value: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa qui",
    id: 3,
  },
];

export default function NewsPage() {
  const [currentSlide, setCurrentSlide] = useState(carouselImages[0].image);
  return (
    <div className="flex-column width-100 padding-t-25">
      <h1 className="font-h1 font-black font-br upper">Նորություններ</h1>
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
          marginBottom: "5vw",
          backgroundColor: variables.redcolor,
          transform: "rotateX(180deg)",
        }}
      />
      <div className="news_page_main_image">
        <img src={currentSlide} alt="main" width="100%" />
        <div className="news_slider_images">
          {carouselImages.map((image) => {
            return (
              <div
                className="news_slider_image"
                key={image.id}
                onClick={() => setCurrentSlide(image.image)}
              >
                <img src={image.image} alt={image.id} width="100%" />
              </div>
            );
          })}
        </div>
      </div>
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
          ծրագրերը: Կազմակերպության կողմից իրականացված բոլոր ծրագրերն ուղղված են
          բնակչության խոցելի խավերի իրավիճակի բարելավմանը. այդպիսի ծրագրերի
          շարքին են դասվում թրաֆիքինգի դեմ պայքարի, առողջապահական ծրագրերի,
          կանանց հզորացմանը, գյուղատնտեսության զարգացմանն ուղղված ծրագրերը:
          Կազմակերպության կողմից իրականացված բոլոր ծրագրերն ուղղված են
          բնակչության խոցելի խավերի իրավիճակի բարելավմանը. այդպիսի ծրագրերի
          շարքին են դասվում թրաֆիքինգի դեմ պայքարի,
        </p>
      </DashedText>
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
