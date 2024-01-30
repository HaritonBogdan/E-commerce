import React from "react";
import classes from "./Offers.module.css";
import exclusive_image from "../Assets/logo500.png";

const Offers = () => {
  return (
    <div className={classes.offers}>
      <div className={classes["offers-left"]}>
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className={classes["offers-right"]}>
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offers;
