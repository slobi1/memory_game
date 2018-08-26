import * as types from '../constants/actionTypes';

export function incrementFlippedCards() {
  return {
    type: types.INCREMENT_FLIPPED_CARDS_COUNT
  }
}