import * as types from '../constants/actionTypes';

export function getScores(data) {
  return {
    type: types.GET_SCORES,
    data
  }
}

export function saveScores(data) {
  return {
    type: types.SAVE_SCORES,
    data
  }
}