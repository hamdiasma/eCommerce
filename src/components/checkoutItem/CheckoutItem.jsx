import React from "react";
import "./CheckoutItem.scss";
import { connect } from "react-redux";
import { removeItem,removeOneItem, addItem } from "../../redux/cart/cartAction";

const CheckoutItem = ({ cartItem, removeCartItem,addOneItem ,removeOneItem}) => {
  const { name, price, imageUrl, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={()=>removeOneItem(cartItem)}> &#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow"onClick={()=>addOneItem(cartItem)} >&#10095;</div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => removeCartItem(cartItem)}>
        &#10008;
      </div>
    </div>
  );
};

const mapDispatchToState = (dispatch) => {
  return {
    removeCartItem: (item) => dispatch(removeItem(item)),
    removeOneItem: (item) => dispatch(removeOneItem(item)),
    addOneItem: (item) => dispatch(addItem(item)),


  };
};

export default connect(null, mapDispatchToState)(CheckoutItem);
