import * as actions from "../constants/actionTypes";

export default function HighScoreReducer(state = {}, action) {
  switch (action.type) {
    case actions.FETCH_SCORES: {
      console.log('hello');
      return action.payload;
    }

    default:
      return state;
  }
};