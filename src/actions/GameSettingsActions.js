import * as types from '../constants/actionTypes';

export function getMatrix(pairs) {
  return {
    type: types.GET_MATRIX,
    pairs
  }
}
export function resetBoard(difficulty) {
  return {
    type: types.RESET_BOARD,
    difficulty
  }
}