import React from "react";
import "../live/Live.css";
import MainCard from "../mainCard/MainCard";

const Live = () => {
  return (
    <div className="live">
      <h2>Live anywhere</h2>
      <div className="live__content">
        <MainCard img="./images/live/live-1.jpg" link="Outdoor getaways" />
        <MainCard img="./images/live/live-2.jpg" link="Unique stays" />
        <MainCard img="./images/live/live-3.jpg" link="Entire homes" />
        <MainCard img="./images/live/live-4.jpg" link="Pets allowed" />
      </div>
    </div>
  );
};

export default Live;
