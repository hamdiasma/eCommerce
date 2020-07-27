import { combineReducers } from "redux";
import userReducer from "./user/userReducers";
import cartReducer from "./cart/cartReducer";

export default combineReducers({
  user: userReducer,
  cart:cartReducer
});
