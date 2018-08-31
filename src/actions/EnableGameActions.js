import * as types from "../constants/actionTypes";

export const enableGame = () => {
  return {
    type: types.ENABLE_GAME
  }
}

export const disableGame = () => {
  return {
    type: types.DISABLE_GAME
  }
}
