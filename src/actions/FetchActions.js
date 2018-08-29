import * as types from "../constants/actionTypes";

export function fetchStart() {
  return {
    type: types.FETCH_START
  }
}

export function fetchSuccess() {
  return function (dispatch) {
    setTimeout(() => {
      dispatch(
        {
          type: types.FETCH_SUCCESS
        }
      )
    }, 2500);
  }
}