import React from "react";

import CustomButton from "../custoButton/CustomButton";
import "./CartDropDown.scss";
import { connect } from "react-redux";
import CartItem from "../cartItem/CartItem";
import { selectCartItems } from "../../redux/cart/cart.selectors";

const CartDropDown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
      {cartItems.map(cartItem=>(
        <CartItem key={cartItem.id} item={cartItem}/>
      ))}
      </div>
      <CustomButton>GO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: selectCartItems(state),
  };
};

export default connect(mapStateToProps)(CartDropDown);
