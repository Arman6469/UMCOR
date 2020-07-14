import React from "react";
import "./homepage.scss";
import Slider from "../../components/Slider/Slider";
import red_line from "../../assets/RedLine.png";
import red_triangle from "../../assets/RedTriangle.png";
import NewsCard from "../../components/NewsCard/NewsCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/Footer/Footer";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";

const sliderImages = [img1, img2];
const news = [
  {
    img: img1,
    value: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa qui",
  },
  {
    img: img1,
    value: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa qui",
  },
  {
    img: img1,
    value: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa qui",
  },
];

export default function HomePage() {
  return (
    <div>
      <Slider sliderImages={sliderImages} />

      <section className="welcome">
        <h2 className="font-h1 font-black font-br upper">Բարի գալուստ</h2>
        <p className="font-large font-black upper">
          «Ամքոր» Հայաստան հիմնադրամ
        </p>
        <div className="home_red_line">
          <img src={red_line} alt="redLine" />
        </div>
        <div className="home_red_triangle">
          <img src={red_triangle} alt="triangle" width="100%" />
        </div>

        <div className="information_umcor">
          <p className="font-medium font-bl">
            {" "}
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
        </div>
      </section>
      <div className="home_news_title">
        <h3 className="font-large upper font-bl">Նորություններ</h3>
        <div className="news_red_line">
          <img src={red_line} alt="redLine" />
        </div>
      </div>
      <section className="flex-column mt-5 pos-relative">
        <div className="jsb" style={{ width: "56vw" }}>
          {news.map((elem, index) => {
            return <NewsCard elem={elem} key={index} />;
          })}
        </div>
        <div className="news_seemore upper font-m font-bl font-white">
          Տեսնել բոլորը <FontAwesomeIcon icon={faSortUp} rotation={90} />
        </div>
      </section>

      <Footer />
    </div>
  );
}
