import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./CartWidget.css";

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <FontAwesomeIcon
        // className="cart-widget"
        icon={faCartShopping}
        size="lg"
        color="orange"
        className="cart"
        // style="font-size:50;"
      />
      <p className="qty"> 3</p>
    </div>
  );
};

export default CartWidget;
