import React from "react";
import classes from "./DescriptionBox.module.css";

function DescriptionBox() {
  return (
    <div className={classes.descriptionbox}>
      <div className={classes["descriptionbox-navigator"]}>
        <div className={classes["descriptionbox-nav-box"]}>Description</div>
        <div
          className={`${classes["descriptionbox-nav-box"]} ${classes["fade"]}`}
        >
          Reviews (122)
        </div>
      </div>
      <div className={classes["descriptionbox-description"]}>
        <p>
          Experimentează căldura și confortul suprem cu puloverul nostru Cozy
          Comfort! Acest pulover de înaltă calitate este creat pentru a-ți oferi
          o senzație plăcută și relaxantă, perfectă pentru zilele friguroase și
          serile liniștite.
        </p>
        <p>
          Experimentează căldura și confortul suprem cu puloverul nostru Cozy
          Comfort! Acest pulover de înaltă calitate este creat pentru a-ți oferi
          o senzație plăcută și relaxantă, perfectă pentru zilele friguroase și
          serile liniștite.
        </p>
      </div>
    </div>
  );
}

export default DescriptionBox;
