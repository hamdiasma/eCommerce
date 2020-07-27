const { SET_CURRENT_USER } = require("./types");

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user,
});
