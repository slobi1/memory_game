import * as types from '../constants/actionTypes';

export const flipCard = ({uniquekey, xlocation, ylocation, symbol}) => {
  return {
    type: types.FLIP_CARD,
    uniquekey,
    xlocation,
    ylocation,
    symbol
  }
}

export const flipBack = locations => {
  return {
    type: types.FLIP_BACK,
    locations
  }
}