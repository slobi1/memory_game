import InitialState from './InitialState';
import * as actions from '../constants/actionTypes';

export default function FlipCardReducer(state = InitialState.cardsFlipped, action) {
  switch (action.type) {
    case actions.FLIP_CARD: {
      let newState = Object.assign({}, state);
      newState.count++;
      newState.key = action.cardKey;
      newState.location.x = action.xlocation;
      newState.location.y = action.ylocation;

      return newState;
    }


    case actions.RESET_BOARD: {
      let newState = Object.assign({}, state);
      newState.count = 0;
      newState.key = '';

      return newState;
    }

    default:
      return state;
  }
}