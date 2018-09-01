import InitialState from './InitialState';
import * as actions from '../constants/actionTypes';

export default function GameScoreReducer(state = InitialState.score, action) {
  switch (action.type) {
    case actions.UPDATE_SCORE: return state + action.points;

    case actions.RESET_SCORE: return 0;

    default: return state;
  }
}