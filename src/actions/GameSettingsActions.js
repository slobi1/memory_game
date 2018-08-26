import * as types from '../constants/actionTypes';

export function getMatrix(pairs) {
  return {
    type: types.GET_MATRIX,
    pairs
  }
}