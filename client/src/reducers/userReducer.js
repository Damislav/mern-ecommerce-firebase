export function userReducer(state = null, action) {
  switch (action.type) {
    case "LOGGED_IN_USER":
      return {
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
}
