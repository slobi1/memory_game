import * as types from '../constants/actionTypes';

export function flipCard(cardKey, xlocation, ylocation, value) {
  return {
    type: types.FLIP_CARD,
    cardKey,
    xlocation,
    ylocation,
    value
  }
}

export function flipBack(locations) {
  return {
    type: types.FLIP_BACK,
    locations
  }
}