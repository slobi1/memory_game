import * as types from "../constants/actionTypes";

export const getPairs = (pairs) => {
  return {
    type: types.GET_PAIRS,
    pairs
  }
}

export const getMatrix = (pairs) => {
  return {
    type: types.GET_MATRIX,
    pairs
  }
}
