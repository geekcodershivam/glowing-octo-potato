import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import moviesReducers from "./moviesReducers";
export default combineReducers({
  auth: authReducer,
  error: errorReducer,
  movies:moviesReducers,
});
