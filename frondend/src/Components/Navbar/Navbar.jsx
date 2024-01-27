import React, { useState } from "react";
import classes from "./Navbar.module.css";

import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [menu, setMenu] = useState("boutique");
  return (
    <div className={classes.navbar}>
      <div className={classes["nav-logo"]}>
        <img src={logo} alt="logo" />
        <p>HARITON BUTIQUE</p>
      </div>
      <ul className={classes["nav-menu"]}>
        <li>
          <Link
            className={menu === "boutique" ? classes["active-li"] : ""}
            onClick={() => {
              setMenu("boutique");
            }}
            to="/"
          >
            Boutique
          </Link>
        </li>
        <li>
          <Link
            className={menu === "kids" ? classes["active-li"] : ""}
            onClick={() => {
              setMenu("kids");
            }}
            to="/kids"
          >
            Kids
          </Link>
        </li>
        <li>
          <Link
            className={menu === "womens" ? classes["active-li"] : ""}
            onClick={() => {
              setMenu("womens");
            }}
            to="/womens"
          >
            Women
          </Link>
        </li>
        <li>
          <Link
            className={menu === "mens" ? classes["active-li"] : ""}
            onClick={() => {
              setMenu("mens");
            }}
            to="/mens"
          >
            Men
          </Link>
        </li>
      </ul>
      <div className={classes["nav-login-cart"]}>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="cart_icon" />
        </Link>
        <div className={classes["nav-cart-count"]}>0</div>
      </div>
    </div>
  );
};
