/* eslint-disable default-case */
import { MOVIES_SUCCESS, MOVIES_FAIL,MOVIES_NEXTPREV } from "../actions/types";

const init = {
  data:null,
  next: null,
  prev: null,
};
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = init, action) {
  switch (action.type) {
    case MOVIES_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };

    case MOVIES_FAIL:
      return {
        ...state,
      };

    case MOVIES_NEXTPREV:
      return {
        ...state,
        data:action.payload.results,
        next: action.payload.next,
        prev: action.payload.previous,
      };

    default:
      return state;
  }
}
