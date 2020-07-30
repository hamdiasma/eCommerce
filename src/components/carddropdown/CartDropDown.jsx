import React from "react";
import { withRouter } from "react-router-dom";
import CustomButton from "../custoButton/CustomButton";
import "./CartDropDown.scss";
import { connect } from "react-redux";
import CartItem from "../cartItem/CartItem";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cartAction";

const CartDropDown = ({ cartItems, history, toggleCartHidden }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <div className="empty-message">
            {" "}
            <p> Your cart is empty </p>
            <span role="img" aria-label="himoge">
              😉
            </span>
          </div>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          toggleCartHidden();
        }}
      >
        GO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: selectCartItems(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCartHidden: () => dispatch(toggleCartHidden()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropDown)
);
