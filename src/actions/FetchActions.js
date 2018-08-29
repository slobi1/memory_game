import * as types from "../constants/actionTypes";

export function fetchStart() {
  return {
    type: types.FETCH_START
  }
}

export function fetchSuccess(data) {
  return function (dispatch) {
    setTimeout(() => {
      dispatch(
        {
          type: types.FETCH_SUCCESS,
          data
        }
      )
    }, 2500);
  }
}