import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import LanguageIcon from "@material-ui/icons/Language";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "../navbar/Navbar.css";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const changeBg = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBg);
  return (
    <>
      <nav className={navbar ? "navbar active" : "navbar"}>
        <div className="logo">
          <Link to="">
            <i className="fab fa-airbnb fa-3x bnb"></i>
          </Link>
        </div>
        <div className="main__nav">
          <ul className="nav__links">
            <li className="nav__items">
              <Link to="" className="act">
                Places to stay
              </Link>
            </li>
            <li className="nav__items">
              <Link to="">Experiences</Link>
            </li>
            <li className="nav__items">
              <Link to="">Online Experiences</Link>
            </li>
          </ul>
          <div className="nav__serach">
            <input type="text" name="" id="" placeholder="Final Destination?" />
            <div className="search__icon">
              <SearchIcon />
            </div>
          </div>
        </div>
        <div className="nav__right">
          <LanguageIcon className="language" />
          <div className="nav__user">
            <MenuIcon />
            <AccountCircleIcon />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
