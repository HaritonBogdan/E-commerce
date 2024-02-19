import React, { useContext } from "react";
import classes from "./ProductDisplay.module.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className={classes.productdisplay}>
      <div className={classes["productdisplay-left"]}>
        <div className={classes["productdisplay-img-list"]}>
          <img src={product.image} alt="product_image" />
          <img src={product.image} alt="product_image" />
          <img src={product.image} alt="product_image" />
          <img src={product.image} alt="product_image" />
        </div>
        <div className={classes["productdisplay-img"]}>
          <img
            className={classes["productdisplay-main-img"]}
            src={product.image}
            alt="product_image_main"
          />
        </div>
      </div>
      <div className={classes["productdisplay-right"]}>
        <h1>{product.name}</h1>
        <div className={classes["productdisplay-right-star"]}>
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className={classes["productdisplay-right-prices"]}>
          <div className={classes["productdisplay-right-price-old"]}>
            {product.old_price},90 lei
          </div>
          <div className={classes["productdisplay-right-price-new"]}>
            {product.new_price},90 lei
          </div>
        </div>
        <div className={classes["productdisplay-right-description"]}>
          <span>Description: </span>Experimentează căldura și confortul suprem
          cu puloverul nostru Cozy Comfort! Acest pulover de înaltă calitate
          este creat pentru a-ți oferi o senzație plăcută și relaxantă, perfectă
          pentru zilele friguroase și serile liniștite.
        </div>
        <p className={classes["productdisplay-right-category"]}>
          <span>Category: </span>
          Women , T-shirt, Crop Top
        </p>
        <p className={classes["productdisplay-right-category"]}>
          <span>Tag: </span>
          Modern, Latest
        </p>
        <div className={classes["productdisplay-right-size"]}>
          <h1>Select Size</h1>
          <div className={classes["productdisplay-right-sizes"]}>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductDisplay;
