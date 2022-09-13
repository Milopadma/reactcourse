import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} from "../actions/types";

import _ from "lodash";

// streamReducer
export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS: // returns a new object with all the streams
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_STREAM: // returns an object with a single stream
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM: // returns an object with a single stream
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM: // returns an object with a single stream
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM: // returns a new object without the deleted stream
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
