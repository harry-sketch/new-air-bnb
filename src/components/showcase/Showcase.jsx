import React from "react";
import "../showcase/Showcase.css";
import { Link } from "react-router-dom";

const Showcase = () => {
  const year = new Date().getFullYear();
  return (
    <div className="showcase">
      <div className="showcase__text">
        <h3>
          Airbnb <span>{year}</span>
        </h3>
        <div className="showcase__mainText">
          <h1>Introducing 100+</h1>
          <h1>upgrades across</h1>
          <h1>our entire service</h1>
        </div>
        <div className="showcase__link">
          <Link to="">Learn what's new</Link>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
