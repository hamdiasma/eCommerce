import { combineReducers } from "redux";
import userReducer from "./user/userReducers";

export default combineReducers({
  user: userReducer,
});
