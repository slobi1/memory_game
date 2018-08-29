import * as actions from "../constants/actionTypes";
import InitialState from "./InitialState";

export default function FetchReducer(state = InitialState.scores, action) {
  switch (action.type) {
    case actions.FETCH_START: {
      return true;
    }

    case actions.FETCH_SUCCESS: {
      return false;
    }

    default: return false;
  }
}