import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS } from "./types";
import axios from "axios";
import history from "../history";
import { returnErrors } from "./errorActions";

export const SignIN = (data) => (dispatch) => {
  axios({
    method: "POST",
    url: "https://demo.credy.in/api/v1/usermodule/login/",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  })
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.data,
      });
      history.push("/home");
    })
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data.error, err.response.status, "LOGIN_FAIL")
      );
      dispatch({
        type: LOGIN_FAIL,
      });
    });
};

export const logout = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};
