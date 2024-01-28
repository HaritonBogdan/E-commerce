import React from "react";
import classes from "./Item.module.css";

const Item = (props) => {
  return (
    <div className={classes.item}>
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className={classes["item-prices"]}>
        <div className={classes["item-price-new"]}>{props.new_price} lei</div>
        <div className={classes["item-price-old"]}>{props.old_price} lei</div>
      </div>
    </div>
  );
};

export default Item;
