import React from "react";
import classes from "./Footer.module.css";
import footer_logo from "../Assets/logo.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";
import facebook_icon from "../Assets/facebook_icon.png";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes["footer-logo"]}>
        <img src={footer_logo} alt="footer-logo" />
        <p>HARITON BOUTIQUE</p>
      </div>
      <ul className={classes["footer-links"]}>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className={classes["footer-social-icon"]}>
        <div className={classes["footer-icons-container"]}>
          <img src={facebook_icon} alt="facebook-icon" />
        </div>
        <div className={classes["footer-icons-container"]}>
          <img src={instagram_icon} alt="instagram-icon" />
        </div>
        <div className={classes["footer-icons-container"]}>
          <img src={pintester_icon} alt="pinterest-icon" />
        </div>
        <div className={classes["footer-icons-container"]}>
          <img src={whatsapp_icon} alt="whatsapp-icon" />
        </div>
      </div>
      <div className={classes["footer-copyright"]}>
        {/* <hr /> */}
        <p>Copyright @ 2024 - All Right Reserved.</p>
      </div>{" "}
    </div>
  );
};

export default Footer;
