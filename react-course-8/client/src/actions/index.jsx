import streams from "../apis/streams";
import history from "../history";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} from "../actions/types";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

// createStream action creator, takes formValues and posts to axios json db
export const createStream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth; // get the userId from the auth reducer
  const response = await streams.post("/streams", { ...formValues, userId }); // post to the json db
  dispatch({ type: CREATE_STREAM, payload: response.data }); // dispatch the action

  history.push("/"); // programmatically navigate the user to the root route
};

// fetchStreams action creator, gets all streams from axios json db
export const fetchStreams = () => async (dispatch) => {
  const response = await streams.get("/streams");
  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

// fetchStream action creator, gets a single stream from axios json db
export const fetchStream = (id) => async (dispatch) => {
  const response = await streams.get(`/streams/${id}`);
  dispatch({ type: FETCH_STREAM, payload: response.data });
};

// editStream action creator, takes id and formValues and puts to axios json db
export const editStream = (id, formValues) => async (dispatch) => {
  const response = await streams.patch(`/streams/${id}`, formValues);
  dispatch({ type: EDIT_STREAM, payload: response.data });
  history.push("/"); // programmatically navigate the user to the root route
};

// deleteStream action creator, takes id and deletes from axios json db
export const deleteStream = (id) => async (dispatch) => {
  await streams.delete(`/streams/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id });

  history.push("/");
};
