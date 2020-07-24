import React, {useState, useMemo} from "react";
import "./newspage.scss";
import NewsCard from "../../components/NewsCard/NewsCard";
import img1 from "../../assets/1.jpg";
import Line from "../../components/Line/Line";
import Triangle from "../../components/Triangle/Triangle";
import variables from "../../style/_variables.scss";
import {Pagination} from "../../components/Pagination/Pagination" 

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
  {
    img: img1,
    value: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa qui",
    id: 3,
  },
  {
    img: img1,
    value: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa qui",
    id: 4,
  },
  {
    img: img1,
    value: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa qui",
    id: 5,
  },
  {
    img: img1,
    value: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa qui",
    id: 6,
  },
  {
    img: img1,
    value: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa qui",
    id: 7,
  },
  {
    img: img1,
    value: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa qui",
    id: 8,
  },
  {
    img: img1,
    value: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa qui",
    id: 10,
  },
];

export default function NewsPage() {
  const [elNumInPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);
  const productsInPage = useMemo(() => {
    return news?.length
      ? news.slice(
          (currentPage - 1) * elNumInPage,
          elNumInPage * currentPage
        )
      : [];
  }, [news, elNumInPage, currentPage]);
  return (
    <div className="flex-column width-100 padding-t-25">
      <h1 className="font-h1 font-black font-br upper">Նորություններ </h1>
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
      <div className="news_page_section">
        {productsInPage.map((elem, index) => {
          return (
            <NewsCard
              elem={elem}
              key={index}
              style={{ marginTop: "1vw", width: "17vw" }}
            />
          );
        })}
      </div>
      <Pagination
          length={Math.ceil(news.length / elNumInPage)}
          handleChange={(page) => setCurrentPage(page)}
        />
    </div>
  );
}
