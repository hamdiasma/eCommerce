import React, { Component } from "react";
import CustomButton from "../custoButton/CustomButton";
import "./CartDropDown.scss";
export class CartDropDown extends Component {
  render() {
    return (
      <div className="cart-dropdown">
        <div className="cart-items"></div>
        <CustomButton >GO CHECKOUT</CustomButton>
      </div>
    );
  }
}

export default CartDropDown;
