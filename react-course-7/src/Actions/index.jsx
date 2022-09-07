import jsonPlaceholder from "../apis/jsonPlaceholder";

//this file contains all the action creators, these are the functions that can be directly called in the react components

//action creator of fetchPosts
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data }); //using dispatch to send an action to all of our different reducers
};

//action creator of fetchUser taking user ID as an argument
export const fetchUser = (id) => {
  return async (dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({ type: "FETCH_USER", payload: response.data });
  };
};
