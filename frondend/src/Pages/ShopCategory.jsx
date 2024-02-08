import React, { useContext } from "react";
import classes from "./CSS/ShopCategory.module.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className={classes["shop-category"]}>
      <img
        className={classes["shopcategory-banner"]}
        src={props.banner}
        alt="banner"
      />
      <div className={classes["shopcategory-indexSort"]}>
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className={classes["shopcategory-sort"]}>
          Sort by <img src={dropdown_icon} alt="dropdown_icon" />
        </div>
      </div>
      <div className={classes["shopcategory-products"]}>
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className={classes["shopcategory-loadmore"]}>Explore More</div>
    </div>
  );
};

export default ShopCategory;
