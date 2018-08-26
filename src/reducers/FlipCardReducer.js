import InitialState from './InitialState';
import * as actions from '../constants/actionTypes';

export default function FlipCardReducer(state = InitialState.cardsFlipped, action) {
  switch (action.type) {
    case actions.INCREMENT_FLIPPED_CARDS_COUNT: {
      let newState = state;
      newState++;

      return newState;
    }

    default:
      return state;
  }
}