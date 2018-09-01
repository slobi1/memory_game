import * as actions from "../constants/actionTypes";

export default function InitGameReducer(state = false, action) {
  switch (action.type) {
    case actions.ENABLE_GAME: return true;

    case actions.DISABLE_GAME: return false;

    default: return state;
  }
};