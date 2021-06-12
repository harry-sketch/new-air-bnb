import React from "react";
import "../footer/Footer.css";
import LanguageIcon from "@material-ui/icons/Language";
import { Link } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import SupervisedUserCircleOutlinedIcon from "@material-ui/icons/SupervisedUserCircleOutlined";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer>
        <div className="footer">
          <div className="common__footer">
            <h3>ABOUT</h3>
            <ul className="footer__links">
              <li className="footer__items">
                <Link to="">How Airbnb works</Link>
              </li>
              <li className="footer__items">
                <Link to="">Newsroom</Link>
              </li>
              <li className="footer__items">
                <Link to="">Investors</Link>
              </li>
              <li className="footer__items">
                <Link to="">Airbnb Plus</Link>
              </li>
              <li className="footer__items">
                <Link to="">Aiirbnb Luxe</Link>
              </li>
              <li className="footer__items">
                <Link to="">Hotel Tonight</Link>
              </li>
              <li className="footer__items">
                <Link to="">Airbnb for Work</Link>
              </li>
              <li className="footer__items">
                <Link to="">Made Possible by Hosts</Link>
              </li>
              <li className="footer__items">
                <Link to="">Careers</Link>
              </li>
              <li className="footer__items">
                <Link to="">Founder's Letter</Link>
              </li>
            </ul>
          </div>
          <div className="common__footer">
            <h3>Community</h3>
            <ul className="footer__links">
              <li className="footer__items">
                <Link to="">Diversity & Belonging</Link>
              </li>
              <li className="footer__items">
                <Link to="">Accessibility</Link>
              </li>
              <li className="footer__items">
                <Link to="">Airbnb Associates</Link>
              </li>
              <li className="footer__items">
                <Link to="">Frontline Stays</Link>
              </li>
              <li className="footer__items">
                <Link to="">Guest Referrals</Link>
              </li>
              <li className="footer__items">
                <Link to="">Airbnb.Org</Link>
              </li>
            </ul>
          </div>
          <div className="common__footer">
            <h3>Host</h3>
            <ul className="footer__links">
              <li className="footer__items">
                <Link to="">Host your home</Link>
              </li>
              <li className="footer__items">
                <Link to="">Host an Online Experience</Link>
              </li>
              <li className="footer__items">
                <Link to="">Responsible Hosting</Link>
              </li>
              <li className="footer__items">
                <Link to="">Resource Center</Link>
              </li>
              <li className="footer__items">
                <Link to="">Community Center</Link>
              </li>
              <li className="footer__items">
                <Link to="">Host and Experience</Link>
              </li>
            </ul>
          </div>
          <div className="common__footer">
            <h3>Support</h3>
            <ul className="footer__links">
              <li className="footer__items">
                <Link to="">Our COVID-19 Response</Link>
              </li>
              <li className="footer__items">
                <Link to="">Help Center</Link>
              </li>
              <li className="footer__items">
                <Link to="">Cancellation Reports</Link>
              </li>
              <li className="footer__items">
                <Link to="">Neighbourhood Support</Link>
              </li>
              <li className="footer__items">
                <Link to="">Trust & Safety</Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="first__footer">
          <div className="left__footer">
            <p>&copy;{year} | Made by Aloof Programmer </p>
          </div>
          <div className="right__footer">
            <div className="language__footer">
              <LanguageIcon />
              <Link to="">English(IN)</Link>
            </div>
            <div className="rupee__footer">
              <Link to="">INR</Link>
            </div>
            <div className="footer__icons">
              <FacebookIcon />
              <TwitterIcon />
              <InstagramIcon />
            </div>
          </div>
        </div>
      </footer>
      <div className="static__footer">
        <div className="static__common ">
          <FavoriteBorderIcon className="static" />
          <Link to="" className="static">
            Wishlist
          </Link>
        </div>
        <div className="static__common">
          <SupervisedUserCircleOutlinedIcon />
          <Link to=""> Log in</Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
