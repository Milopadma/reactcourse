import jsonPlaceholder from "../apis/jsonPlaceholder";

//lodash
import _ from "lodash";

//this file contains all the action creators, these are the functions that can be directly called in the react components

//action creator of fetchPosts
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data }); //using dispatch to send an action to all of our different reducers
};

//action creator of fetchUser taking userID as an argument
export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts()); //wait for the fetchPosts action to complete before moving on to the next line
  const userIds = _.uniq(_.map(getState().posts, "userId")); //get all the unique userIds from the mapped out posts from state
  userIds.forEach((id) => dispatch(fetchUser(id))); //dispatch the fetchUser action for each userId
};

// //action creator of fetchUser taking user ID as an argument
// export const fetchUser = (id) => {
//   return async (dispatch) => _fetchUser(id, dispatch); //using the lodash memoize function to prevent multiple requests to the same user
// };

// //private function to fetch user using lodash memoize
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({ type: "FETCH_USER", payload: response.data });
// });
