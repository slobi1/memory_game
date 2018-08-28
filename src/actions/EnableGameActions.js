import * as types from "../constants/actionTypes";

export function enableGame() {
  return {
    type: types.ENABLE_GAME
  }
}

export function disableGame() {
  return {
    type: types.DISABLE_GAME
  }
}
