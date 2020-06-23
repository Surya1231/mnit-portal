import { createStore, combineReducers, applyMiddleware } from "redux";
import { homeReducer } from "./reducers/home";
import { authReducer } from "./reducers/auth";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  home: homeReducer,
  auth: authReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
