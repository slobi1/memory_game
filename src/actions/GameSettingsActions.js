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

export function revealAll() {
  return {
    type: types.REVEAL_ALL,
  }
}

export function hideAll() {
  return {
    type: types.HIDE_ALL,
  }
}

export function resetMatched() {
  return {
    type: types.RESET_MATCHED
  }
}