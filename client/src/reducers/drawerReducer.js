export const drawerReducer = (state = true, action) => {
  switch (action.type) {
    case "SET_VISIBLE":
      return action.payload;
    default:
      return state;
  }
};
