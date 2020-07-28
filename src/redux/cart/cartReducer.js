import { TOGGLE_CART_HIDDEN, ADD_ITEM } from "./types";
import { adItemToCart } from "./cart.utils";

const INITAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: adItemToCart(state.cartItems,action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
