import React from "react";
import "../outdoor/Outdoor.css";
import { Link } from "react-router-dom";

function Outdoor() {
  return (
    <div className="outdoor">
      <div className="outdoor__img">
        <img src="./images/mid.jpg" alt="mid" />
      </div>
      <div className="outdoor__content">
        <h2>The Greatest</h2>
        <h2>Outdoor</h2>
        <p>Wishlist curated by Airbnb.</p>
        <div className="outdoor__link">
          <Link to="">Get inspired</Link>
        </div>
      </div>
    </div>
  );
}

export default Outdoor;
