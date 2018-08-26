import InitialState from './InitialState';
import {INCREMENT_FLIPPED_CARDS_COUNT} from '../constants/actionTypes';

export default function FlipCardReducer(state = InitialState.cardsFlipped, action) {
  switch (action.type) {
    case INCREMENT_FLIPPED_CARDS_COUNT: {
      let newState = state;
      newState++;

      return newState;
    }

    default:
      return state;
  }
}