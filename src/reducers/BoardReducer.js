import InitialState from "./InitialState";
import * as actions from "../constants/actionTypes";
import * as utilActions from "../utils/array";

export default function BoardReducer(state = InitialState.board, action) {
  switch (action.type) {
    case actions.RESET_BOARD: return utilActions.getShuffled(action.difficulty, action.x);

    case actions.FLIP_CARD: {
      const newState = Object.assign([], state);

      newState[action.ylocation][action.xlocation].flipped = true;

      return newState;
    }

    case actions.FLIP_BACK: {
      const newState = Object.assign([], state);

      action.locations.forEach(location => {
        return newState[location.y][location.x].flipped = false;
      });

      return newState;
    }

    case actions.SET_CARD_TO_RESOLVED: {
      const newState = Object.assign([], state);

      action.locations.forEach(location => {
        return newState[location.y][location.x].resolved = true;
      });

      return newState;
    }

    case actions.HIDE_ALL: {
      const newState = Object.assign([], state);

      newState.map(row => {
        return row.map(col => {
          col.flipped = false;
          return col;
        });
      });

      return newState;
    }

    default: return state;
  }
}