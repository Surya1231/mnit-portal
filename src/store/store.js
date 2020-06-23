import { createStore, combineReducers, applyMiddleware } from "redux";
import { homeReducer } from "./reducers/home";
import { authReducer } from "./reducers/auth";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import thunk from "redux-thunk";
import { getFirebase } from "react-redux-firebase";

const rootReducer = combineReducers({
  home: homeReducer,
  auth: authReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export const store = createStore(
  rootReducer,
  applyMiddleware(
    thunk.withExtraArgument({
      getFirebase,
    })
  )
);
