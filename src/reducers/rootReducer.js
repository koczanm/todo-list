import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

import authReducer from "./authReducer";
import todoReducer from "./todoReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  project: todoReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

export default rootReducer;
