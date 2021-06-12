import React from "react";
import "../card/Card.css";

const Card = ({ img, heading, para }) => {
  return (
    <div className="card">
      <img src={img} alt="explore" />
      <div className="card__content">
        <h3>{heading}</h3>
        <p>{para}</p>
      </div>
    </div>
  );
};

export default Card;
