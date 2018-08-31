import * as types from "../constants/actionTypes";

export const fetchStart = () => {
  return {
    type: types.FETCH_START
  }
}

export const fetchSuccess = data => {
  return function (dispatch) {
    setTimeout(() => {
      dispatch(
        {
          type: types.FETCH_SUCCESS,
          data
        }
      )
    }, 1000);
  }
}