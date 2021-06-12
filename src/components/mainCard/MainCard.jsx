import React from "react";
import "../mainCard/MainCard.css";
import { Link } from "react-router-dom";

const MainCard = ({ img, link, sublink }) => {
  return (
    <div className="mainCard">
      <div className="main__img">
        <img src={img} alt="mainCard" />
      </div>
      <div className="mainCard__link">
        <Link to="">{link}</Link>
        <br />
        <p to="">{sublink}</p>
      </div>
    </div>
  );
};

export default MainCard;
