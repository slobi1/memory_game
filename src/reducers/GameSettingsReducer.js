import InitialState from './InitialState';
import * as actions from '../constants/actionTypes';

export default function GameSettingsReducer(state = InitialState.settings, action) {
  switch (action.type) {
    case actions.FLIP_CARD: {
      const newState = Object.assign({}, state);
      const flippedCardsCount = Object.keys(state.values).length;

      newState.locations[flippedCardsCount] = {x: action.xlocation, y: action.ylocation};
      newState.values[flippedCardsCount] = action.symbol;

      if (newState.values.length === 2) {
        if (newState.values[0] === newState.values[1]) {
          newState.resolved[newState.resolved.length] = action.symbol;

          newState.locations = [];
          newState.values = [];
          newState.matched = true;
        } else {
          newState.matched = false;
        }
      }

      return newState;
    }

    case actions.FLIP_BACK: {
      const newState = Object.assign({}, state);

      newState.locations = [];
      newState.values = [];
      delete newState.matched;

      return newState;
    }

    case actions.RESET_BOARD: {
      const newState = Object.assign({}, state);

      newState.resolved = [];

      return newState;
    }

    case actions.UPDATE_SCORE: {
      const newState = Object.assign({}, state);

      delete newState.matched;

      return newState;
    }

    default:
      return state;
  }
}