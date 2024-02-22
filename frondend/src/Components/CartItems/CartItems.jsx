import React, { useContext } from "react";
import classes from "./CartItems.module.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } =
    useContext(ShopContext);
  // console.log(getTotalCartAmount());

  return (
    <div className={classes.cartitems}>
      <div className={classes["cartitems-format-main"]}>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div
                className={`${classes["cartitems-format"]} ${classes["cartitems-format-main"]}`}
              >
                <img
                  src={e.image}
                  alt=""
                  className={classes["cartitems-product-icon"]}
                />
                <p>{e.name}</p>
                <p>{e.new_price} lei</p>
                <button className={classes["cartitems-quantity"]}>
                  {cartItems[e.id]}
                </button>
                <p>{e.new_price * cartItems[e.id]} lei</p>
                <img
                  className={classes["cartitems-remove-icon"]}
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className={classes["cartitems-down"]}>
        <div className={classes["cartitems-total"]}>
          <h1>Cart Totals</h1>
          <div>
            <div className={classes["cartitems-total-item"]}>
              <p>Subtotal</p>
              <p>{getTotalCartAmount()} lei</p>
            </div>
            <hr />
            <div className={classes["cartitems-total-item"]}>
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className={classes["cartitems-total-item"]}>
              <h3>Total</h3>
              <h3>{getTotalCartAmount()} lei</h3>
            </div>
          </div>
          <button>CHECKOUT</button>
        </div>
        <div className={classes["cartitems-promocode"]}>
          <p>If you have a promo code, Enter it here</p>
          <div className={classes["cartitems-promobox"]}>
            <input type="text" placeholder=" Promo Code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
