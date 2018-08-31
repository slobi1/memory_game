import * as types from '../constants/actionTypes';

export const hideAll = () => {
  return {
    type: types.HIDE_ALL,
  }
}

export const resetMatched = () => {
  return {
    type: types.RESET_MATCHED
  }
}