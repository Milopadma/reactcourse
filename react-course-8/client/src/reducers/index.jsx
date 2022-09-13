import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { reducer as formReducer } from "redux-form/dist/redux-form";

export default combineReducers({
  auth: authReducer, //from authReducer
  form: formReducer, //from redux-form
});
