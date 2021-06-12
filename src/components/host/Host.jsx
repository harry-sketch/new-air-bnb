import React from "react";
import "../host/Host.css";
import { Link } from "react-router-dom";

const Host = () => {
  return (
    <div className="host">
      <div className="host__img">
        <img src="./images/mid-2.jpg" alt="mid" />
      </div>
      <div className="host__content">
        <h2>Become a </h2>
        <h2>Host</h2>
        <p>Earn extra income & unlock opportunities.</p>
        <div className="host__link">
          <Link to="">Learn more</Link>
        </div>
      </div>
    </div>
  );
};

export default Host;
