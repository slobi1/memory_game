import * as types from "../constants/actionTypes";

export function getPairs(pairs) {
  return {
    type: types.GET_PAIRS,
    pairs
  }
}

export function getMatrix(pairs) {
  return {
    type: types.GET_MATRIX,
    pairs
  }
}
