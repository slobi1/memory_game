import * as types from "../constants/actionTypes";

export function resetBoard(difficulty, x) {
  return {
    type: types.RESET_BOARD,
    difficulty,
    x
  }
}

export function setCardToResolved(locations) {
  return {
    type: types.SET_CARD_TO_RESOLVED,
    locations
  }
}