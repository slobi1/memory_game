import * as types from '../constants/actionTypes';

export function resetBoard(difficulty) {
  return {
    type: types.RESET_BOARD,
    difficulty
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