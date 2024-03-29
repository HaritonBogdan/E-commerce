import React from "react";
import classes from "./Item.module.css";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className={classes.item}>
      <Link to={`/product/${props.id}`}>
        <img onClick={window.scrollTo(0, 0)} src={props.image} alt="" />
      </Link>
      <p>{props.name}</p>
      <div className={classes["item-prices"]}>
        <div className={classes["item-price-new"]}>{props.new_price} lei</div>
        <div className={classes["item-price-old"]}>{props.old_price} lei</div>
      </div>
    </div>
  );
};

export default Item;
