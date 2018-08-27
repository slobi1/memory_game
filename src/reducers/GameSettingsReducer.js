import InitialState from './InitialState';
import * as actions from '../constants/actionTypes';
import shuffle from 'lodash/shuffle'

export default function GameSettingsReducer(state = InitialState.complexity, action) {
  switch (action.type) {
    case actions.GET_MATRIX: {
      const newState = Object.assign({}, state);

      newState.pairs = action.pairs;
      newState.matrix.x = Math.ceil(Math.sqrt(action.pairs*2));
      newState.matrix.y = Math.floor(Math.sqrt(action.pairs*2));

      return newState;
    }

    case actions.SET_BOARD: {
      const newState = Object.assign({}, state);

      let symbols = [];
      let collection = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

      for (let i=0; i<action.difficulty; i++) {
        let char = collection.shift();
        symbols.push(char);
        symbols.push(char);
      }

      newState.matrix.board = shuffle(symbols);

      return newState;
    }

    default:
      return state;
  }
}