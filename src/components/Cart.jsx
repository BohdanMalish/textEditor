import React, { useState } from "react";
import "../components/Header.css";
import CartImage from "../components/Cart.png";
import ElementCart from "./ElementCart";
const Cart = () => {
  const [cartVisible, setVisible] = useState(false);
  const lst = [1, 2, 3, 45, 6];
  console.log(lst);
  return (
    <div className="Cart">
      <img
        onClick={() => {
          setVisible(!cartVisible);
        }}
        src={CartImage}
      ></img>
      {cartVisible?
      <div className={'ProductsCart'}>
      {lst.map((e) => 
        <ElementCart></ElementCart>
      )}</div>:null}
    </div>
  );
};
export default Cart;
