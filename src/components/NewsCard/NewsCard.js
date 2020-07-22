import React from "react";
import "./newscard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp } from "@fortawesome/free-solid-svg-icons";

export default function NewsCard({ elem }) {
  return (
    <div className="news_card_main_div">
      <div className="news_card_image">
        <img src={elem.img} alt="news" width="100%" />
      </div>
      <div className="flex-column">
        <div className="news_card_yellow_triangle"></div>
        <div className="news_card_yellow_line"></div>
        <div>
          <p className="font-small">
            տպագրական արդյունաբերության ստանդարտ մոդելային տեքստ, ինչը մի անհայտ
          </p>
        </div>
        <div className="flex-end width-100">
          <div className="news_card_button upper font-bl font-small font-black">
            Ավելին <FontAwesomeIcon icon={faSortUp} rotation={90} />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
