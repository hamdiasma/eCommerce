import React from "react";
import "./CheckoutItem.scss";
import { connect } from "react-redux";
import { removeItem } from "../../redux/cart/cartAction";

const CheckoutItem = ({ cartItem ,removeCartItem}) => {
  const { name, price, imageUrl, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => removeCartItem(cartItem)}
      >
        &#10008;
      </div>
    </div>
  );
};

const mapDispatchToState = (dispatch) => {
  return {
    removeCartItem: (item) => dispatch(removeItem(item)),
  };
};

export default connect(null, mapDispatchToState)(CheckoutItem);
