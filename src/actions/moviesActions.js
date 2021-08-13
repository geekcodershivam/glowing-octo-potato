import { MOVIES_SUCCESS, MOVIES_FAIL, MOVIES_NEXTPREV } from "./types";
import axios from "axios";

import { returnErrors } from "./errorActions";
let token = localStorage.getItem("token");
export const fetch_movies = () => (dispatch) => {
  axios({
    method: "GET",
    url: "https://demo.credy.in/api/v1/maya/movies/",
    headers: {
      Authorization: `Token ${token}`,
    },
  })
    .then((res) => {
      dispatch({
        type: MOVIES_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(
        returnErrors(
          err.response.data.error,
          err.response.status,
          "MOVIES_FAIL"
        )
      );
      dispatch({
        type: MOVIES_FAIL,
      });
    });
};
export const fetch_NextPrev = (pageNo) => (dispatch) => {
  axios({
    method: "GET",
    url: pageNo
      ? `https://demo.credy.in/api/v1/maya/movies/?page=${pageNo}`
      : `https://demo.credy.in/api/v1/maya/movies/`,
    headers: {
      Authorization: `Token ${token}`,
    },
  })
    .then((res) => {
      console.log(res.data)
      dispatch({
        type: MOVIES_NEXTPREV,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(
        returnErrors(
          err.response.data.error,
          err.response.status,
          "MOVIES_FAIL"
        )
      );
      dispatch({
        type: MOVIES_FAIL,
      });
    });
};
