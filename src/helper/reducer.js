function reducer(state, action) {
  switch (action.type) {
    case "LOGGED_IN":
      return { ...state, authorization: action.payload, user: action.user };
    case "LOGGED_OUT":
      return { ...state, authorization: action.payload };
    default:
      return state;
  }
}

export default reducer;
