import * as types from "../constants/actionTypes";
import { scoresRef } from "../config/firebase";

export const addScore = newScore => async dispatch => {
  scoresRef.push().set(newScore);
};

export const fetchScores = () => async dispatch => {
  scoresRef.on("value", snapshot => {
    dispatch({
      type: types.FETCH_SCORES,
      payload: snapshot.val()
    });
  });
}
