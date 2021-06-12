import React from "react";
import "../discover/Discover.css";
import MainCard from "../mainCard/MainCard";

const Discover = () => {
  return (
    <div className="discover">
      <h2>Discover Experiences</h2>
      <p>Unique activities with local experts-in person or online.</p>
      <div className="discover__content">
        <MainCard
          img="./images/discover/dis.jpg"
          link="Featured collection:Wanderlust"
          sublink="Travel from home with online experience."
        />
        <MainCard
          img="./images/discover/dis-1.jpg"
          link="Online Experiences"
          sublink="Live,interactive activities led by hosts."
        />
        <MainCard
          img="./images/discover/dis-2.jpg"
          link="Experiences"
          sublink="Local things to do,wherever to like."
        />
      </div>
    </div>
  );
};

export default Discover;
