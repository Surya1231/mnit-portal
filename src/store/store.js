import { createStore, combineReducers } from "redux";
import { homeReducer } from "./reducers/home";
import { authReducer } from "./reducers/auth";

const rootReducer = combineReducers({
  home: homeReducer,
  auth: authReducer,
});
export const store = createStore(rootReducer);
