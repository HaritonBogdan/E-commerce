import React from "react";
import classes from "./NewsLetter.module.css";

const NewsLetter = () => {
  return (
    <div className={classes.newsletter}>
      <h1>Get Exclusive Ofeers On Your Email</h1>
      <p>Subscribe to our newletter and stay updated</p>
      <div>
        <input type="email" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
