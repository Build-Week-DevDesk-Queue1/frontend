import axios from "axios";
const REGISTER_USER_START = "REGISTER_USER_START";
const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";

function registerUser(user) {
  return dispatch => {
    dispatch({ type: REGISTER_USER_START });
    axios
      .post("https://the-queue1.herokuapp.com/api/auth/register", user)
      .then(res => {
        dispatch({ type: REGISTER_USER_SUCCESS, payload: res.data });
      })
      .catch(res => {
        dispatch({
          type: REGISTER_USER_FAILURE,
          payload: "Unable to register user"
        });
      });
  };
}

export {
  registerUser,
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE
};
