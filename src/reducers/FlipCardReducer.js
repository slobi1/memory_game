import InitialState from './InitialState';
import * as actions from '../constants/actionTypes';

export default function FlipCardReducer(state = InitialState.cardsFlippedCount, action) {
  switch (action.type) {
    case actions.INCREMENT_FLIPPED_CARDS_COUNT: {
      let newState = state;
      newState++;

      return newState;
    }


    case actions.SET_BOARD: {
      return 0;
    }

    default:
      return state;
  }
}