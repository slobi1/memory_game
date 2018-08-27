import * as types from '../constants/actionTypes';

export function flipCard(cardKey, xlocation, ylocation) {
  return {
    type: types.FLIP_CARD,
    cardKey,
    xlocation,
    ylocation
  }
}