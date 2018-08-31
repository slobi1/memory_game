import * as types from "../constants/actionTypes";

export const resetBoard = (difficulty, x) => {
  return {
    type: types.RESET_BOARD,
    difficulty,
    x
  }
}

export const setCardToResolved = locations => {
  return {
    type: types.SET_CARD_TO_RESOLVED,
    locations
  }
}