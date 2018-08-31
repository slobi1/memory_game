import * as types from '../constants/actionTypes';

export const updateScore = points => {
  return {
    type: types.UPDATE_SCORE,
    points
  }
}

export const resetScore = () =>  {
  return {
    type: types.RESET_SCORE
  }
}