import React from "react";
import classes from "./RelatedProducts.module.css";
import data_products from "../Assets/data";
import Item from "../Item/Item";

function RelatedProducts() {
  return (
    <div className={classes.relatedproducts}>
      <h1>Related Products</h1>
      <div className={classes["relatedproducts-item"]}>
        {data_products.map((item, i) => {
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
        })}
      </div>
    </div>
  );
}

export default RelatedProducts;
