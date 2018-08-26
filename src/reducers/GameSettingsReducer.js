import InitialState from './InitialState';
import * as actions from '../constants/actionTypes';

export default function GameSettingsReducer(state = InitialState.complexity, action) {
  switch (action.type) {
    case actions.GET_MATRIX: {
      const newState = Object.assign({}, state);

      newState.pairs = action.pairs;
      newState.matrix.x = Math.ceil(Math.sqrt(action.pairs*2));
      newState.matrix.y = Math.floor(Math.sqrt(action.pairs*2));

      return newState;
    }

    default:
      return state;
  }
}