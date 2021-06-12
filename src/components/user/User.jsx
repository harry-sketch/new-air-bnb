import React from "react";
import "../user/User.css";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className="user">
      <div className="user__img">
        <img src="./images/mid-3.jpg" alt="mid" />
      </div>
      <div className="user__content">
        <h2>User </h2>
        <h2>Friendly</h2>
        <p>Sign up or Log in for more.</p>
        <div className="user__link">
          <Link to="">View more</Link>
        </div>
      </div>
    </div>
  );
};

export default User;
