import React from "react";
import Card from "../card/Card";
import "../explore/Explore.css";

const Explore = () => {
  return (
    <div className="explore">
      <h2>Explore nearby</h2>
      <div className="explore__content">
        <Card
          img="./images/explore/ex-1.jpg"
          heading="Haldwani"
          para="4.5-hour drive"
        />
        <Card
          img="./images/explore/ex-2.jpg"
          heading="Manali"
          para="7.2-hour drive"
        />
        <Card
          img="./images/explore/ex-3.jpg"
          heading="Mussorie"
          para="4-hour drive"
        />
        <Card
          img="./images/explore/ex-4.jpg"
          heading="Almora"
          para="3-hour drive"
        />
      </div>
      <div className="explore__content">
        <Card
          img="./images/explore/ex-5.jpg"
          heading=" Dehradun"
          para="7-hour drive"
        />
        <Card
          img="./images/explore/ex-6.jpg"
          heading="Shimla"
          para="3.5-hour drive"
        />
        <Card
          img="./images/explore/ex-7.jpg"
          heading="Kullu"
          para="8-hour drive"
        />
        <Card
          img="./images/explore/ex-8.jpg"
          heading="Noida"
          para="10-hour drive"
        />
      </div>
    </div>
  );
};

export default Explore;
