import React from "react";
import classes from "./CSS/LoginSignup.module.css";

const LoginSignup = () => {
  return (
    <div className={classes.loginsignup}>
      <div className={classes["loginsignup-container"]}>
        <h1>Sign Up</h1>
        <div className={classes["loginsignup-fields"]}>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className={classes["loginsignup-login"]}>
          Already have an account? <span>Login here</span>
        </p>
        <div className={classes["loginsignup-agree"]}>
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy polity.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
