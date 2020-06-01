import axios from "axios";
const REGISTER_USER_START = "REGISTER_USER_START";
const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";

const LOGIN_USER_START = "LOGIN_USER_START";
const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";

function registerUser(user, history) {
  return dispatch => {
    dispatch({ type: REGISTER_USER_START });
    axios
      .post("https://devdeskqueue-api.herokuapp.com/api/auth/register", user)
      .then(res => {
        dispatch({ type: REGISTER_USER_SUCCESS, payload: res.data });
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data));

        if (res.data.role === "student") {
          history.push("/student-dashboard");
        }

        if (res.data.role === "helper") {
          history.push("/helper-dashboard");
        }
      })
      .catch(err => {
        dispatch({
          type: REGISTER_USER_FAILURE,
          payload: "Unable to register user"
        });
      });
  };
}

function loginUser(user, history) {
  return dispatch => {
    dispatch({ type: LOGIN_USER_START });
    axios
      .post("https://devdeskqueue-api.herokuapp.com/api/auth/login", user)
      .then(res => {
        dispatch({ type: LOGIN_USER_SUCCESS, payload: res.data });
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data));

        if (res.data.role === "student") {
          console.log(res.data.role);
          history.push("/student-dashboard");
        }

        if (res.data.role === "helper") {
          console.log(res.data.role);
          history.push("/helper-dashboard");
        }
      })
      .catch(err => {
        dispatch({
          type: LOGIN_USER_FAILURE,
          payload: "Unable to login user"
        });
      });
  };
}

export {
  registerUser,
  loginUser,
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE
};
