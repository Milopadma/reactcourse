import { SIGN_IN, SIGN_OUT } from "../actions/types";

//initial state object of the auth reducer
const INITIAL_STATE = {
  isSignedIn: null,
  errorMessage: "",
};

//authentication reducer
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};
