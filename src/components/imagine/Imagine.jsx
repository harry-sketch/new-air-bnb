import React from "react";
import "../imagine/Imagine.css";
import MainCard from "../mainCard/MainCard";

const Imagine = () => {
  return (
    <div className="imagine">
      <h2>Imagination</h2>
      <div className="imagine__content">
        <MainCard img="./images/imagine/ima-1.jpg" link="Explore " />
        <MainCard img="./images/imagine/ima-2.jpg" link="Creative" />
        <MainCard img="./images/imagine/ima-3.jpg" link="Design" />
        <MainCard img="./images/imagine/ima-4.jpg" link="Art" />
        <MainCard img="./images/imagine/ima-5.jpg" link="Music" />
        <MainCard img="./images/imagine/ima-6.jpg" link="Technology" />
        <MainCard img="./images/imagine/ima-7.jpg" link="Nature" />
        <MainCard img="./images/imagine/ima-8.jpg" link="Flower" />
        <MainCard img="./images/imagine/ima-9.jpg" link="Beautiful" />
        <MainCard img="./images/imagine/ima-10.jpg" link="Dream" />
        <MainCard img="./images/imagine/ima-11.jpg" link="Travel" />
        <MainCard img="./images/imagine/ima-12.jpg" link="Food" />
      </div>
    </div>
  );
};

export default Imagine;
