import * as types from '../constants/actionTypes';

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