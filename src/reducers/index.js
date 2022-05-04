import { combineReducers } from "redux";

import productReducer from "./product";
import categoriesReducer from "./categories";

const rootReducer = combineReducers({
  product: productReducer,
  categories: categoriesReducer
});

export default rootReducer;
