import { combineReducers } from "redux";
import userReducer from "./user/userReducers";
import cartReducer from "./cart/cartReducer";
import directoruReducer from "./directory/directoryReducer";
import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoruReducer,
});

export default persistReducer(persistConfig, rootReducer);
