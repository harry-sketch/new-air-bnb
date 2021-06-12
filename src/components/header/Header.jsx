import React from "react";
import "../header/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="header__link">
        <h3 className="header__head">
          <Link to="">Get the latest on our COVID-19 response</Link>
        </h3>
      </div>
    </header>
  );
};

export default Header;
