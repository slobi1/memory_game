import InitialState from './InitialState';
import * as actions from '../constants/actionTypes';

export default function GameSettingsReducer(state = InitialState, action) {
  switch (action.type) {
    case actions.FLIP_CARD: {
      const flippedCardsCount = Object.keys(state.values).length;
      if (flippedCardsCount === 2 || state.keys.indexOf(action.cardKey) !== -1 || state.resolved.indexOf(action.value) !== -1) {
        return state;
      }

      const newState = Object.assign({}, state);

      newState.keys[flippedCardsCount] = action.cardKey;
      newState.locations[flippedCardsCount] = {x: action.xlocation, y: action.ylocation};
      newState.values[flippedCardsCount] = action.value;

      if (Object.keys(newState.keys).length === 2) {
        if (newState.values[0] === newState.values[1]) {
          newState.resolved[newState.resolved.length] = action.value;

          newState.locations = [];
          newState.keys = [];
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
      newState.keys = [];
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