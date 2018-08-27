import * as types from '../constants/actionTypes';

export function getMatrix(pairs) {
  return {
    type: types.GET_MATRIX,
    pairs
  }
}
export function setBoard(difficulty) {
  return {
    type: types.SET_BOARD,
    difficulty
  }
}