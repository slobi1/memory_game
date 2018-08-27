import * as types from '../constants/actionTypes';

export function updateScore(points) {
  return {
    type: types.UPDATE_SCORE,
    points
  }
}

export function resetScore() {
  return {
    type: types.RESET_SCORE
  }
}