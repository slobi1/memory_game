import InitialState from './InitialState';
import * as actions from '../constants/actionTypes';
import * as utilActions from '../utils/array';

export default function GameSettingsReducer(state = InitialState.complexity, action) {
  switch (action.type) {
    case actions.GET_MATRIX: {
      const newState = Object.assign({}, state);

      newState.pairs = action.pairs;
      newState.matrix.x = Math.ceil(Math.sqrt(action.pairs*2));
      newState.matrix.y = Math.floor(Math.sqrt(action.pairs*2));

      return newState;
    }

    case actions.FLIP_CARD: {
      const newState = Object.assign({}, state);
      newState.matrix.board[action.ylocation][action.xlocation].flipped = true;

      return newState;
    }

    case actions.RESET_BOARD: {
      const newState = Object.assign({}, state);
      const board = utilActions.getShuffled(action.difficulty, newState.matrix.x);

      newState.matrix.board = board;
      return newState;
    }

    default:
      return state;
  }
}