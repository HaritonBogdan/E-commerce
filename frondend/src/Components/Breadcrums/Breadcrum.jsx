import React from "react";
import classes from "./Breadcrum.module.css";
import arrow_icon from "../Assets/breadcrum_arrow.png";

const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className={classes.breadcrum}>
      HOME <img src={arrow_icon} alt="iron_icon" /> SHOP
      <img src={arrow_icon} alt="iron_icon" /> {product.category.toUpperCase()}
      <img src={arrow_icon} alt="iron_icon" /> {product.name.toUpperCase()}
    </div>
  );
};

export default Breadcrum;
