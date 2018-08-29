import InitialState from './InitialState';
import * as actions from '../constants/actionTypes';

export default function ScoresReducer(state = InitialState.scoreData, action) {
  switch (action.type) {
    case actions.FETCH_SUCCESS: {
      if (action.data) {
        return action.data;
      }

      return state;
    }

    default:
      return state;
  }
}