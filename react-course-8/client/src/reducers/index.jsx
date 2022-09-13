import { combineReducers } from "redux";
import authReducer from "./authReducer";
import streamReducer from "./streamReducer";
import { reducer as formReducer } from "redux-form/dist/redux-form";

export default combineReducers({
  auth: authReducer, //from authReducer
  form: formReducer, //from redux-form
  streams: streamReducer, //from streamReducer
});
