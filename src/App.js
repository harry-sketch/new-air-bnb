import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Showcase from "./components/showcase/Showcase";
import Explore from "./components/explore/Explore";
import Live from "./components/live/Live";
import Outdoor from "./components/outdoor/Outdoor";
import Discover from "./components/discover/Discover";
import Host from "./components/host/Host";
import { css } from "@emotion/react";
import PacmanLoader from "react-spinners/PacmanLoader";
import Footer from "./components/footer/Footer";
import Imagine from "./components/imagine/Imagine";
import User from "./components/user/User";

const App = () => {
  const [loading, setLoading] = useState(false);
  const override = css`
    margin: 15rem auto;
    display: block;
  `;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {loading ? (
        <PacmanLoader
          size={50}
          css={override}
          color={"#e41d56"}
          Loading={loading}
        />
      ) : (
        <>
          <Header />
          <Navbar />
          <Showcase />
          <Explore />
          <Live />
          <Outdoor />
          <Discover />
          <Host />
          <Imagine />
          <User />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
