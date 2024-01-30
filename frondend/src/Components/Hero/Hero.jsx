import React from "react";
import classes from "./Hero.module.css";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/logo500.png";

function Hero() {
  return (
    <div className={classes.hero}>
      <div className={classes["hero-left"]}>
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className={classes["hero-hand-icon"]}>
            <p>new</p>
          </div>
          <p>hand made</p>
          <p>collections</p>
        </div>
        <div className={classes["hero-latest-btn"]}>
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="arrow_icon" />
        </div>
      </div>
      <div className={classes["hero-right"]}>
        <img src={hero_image} alt="her_image" />
      </div>
    </div>
  );
}

export default Hero;
