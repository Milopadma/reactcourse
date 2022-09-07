//FETCH_POSTS reducer (this receives the action types and processes it from there onwards)
export default (state = [], action) => {
  //default state of null array state
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;

    default:
      return state;
  }
};
