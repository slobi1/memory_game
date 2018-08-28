import InitialState from './InitialState';
import * as actions from '../constants/actionTypes';
import * as utilActions from '../utils/array';

export default function GameSettingsReducer(state = InitialState.game, action) {
  switch (action.type) {
    case actions.GET_MATRIX: {
      const newState = Object.assign({}, state);

      newState.complexity.pairs = action.pairs;
      newState.complexity.matrix.x = Math.ceil(Math.sqrt(action.pairs*2));
      newState.complexity.matrix.y = Math.floor(Math.sqrt(action.pairs*2));

      return newState;
    }

    case actions.FLIP_CARD: {
      const flippedCardsCount = Object.keys(state.cardsFlipped.keys).length;
      if (flippedCardsCount === 2 || state.cardsFlipped.keys.indexOf(action.cardKey) !== -1 || state.cardsFlipped.resolved.indexOf(action.value) !== -1) {
        return state;
      }

      const newState = Object.assign({}, state);

      newState.complexity.matrix.board[action.ylocation][action.xlocation].flipped = true;

      newState.cardsFlipped.keys[flippedCardsCount] = action.cardKey;
      newState.cardsFlipped.locations[flippedCardsCount] = {x: action.xlocation, y: action.ylocation};
      newState.cardsFlipped.values[flippedCardsCount] = action.value;

      if (Object.keys(newState.cardsFlipped.keys).length === 2) {
        if (newState.cardsFlipped.values[0] === newState.cardsFlipped.values[1]) {
          newState.cardsFlipped.resolved[newState.cardsFlipped.resolved.length] = action.value;
          newState.cardsFlipped.locations.forEach(location => {
            return newState.complexity.matrix.board[location.y][location.x].resolved = true;
          });

          newState.cardsFlipped.locations = [];
          newState.cardsFlipped.keys = [];
          newState.cardsFlipped.values = [];
          console.log(newState.cardsFlipped);
          newState.matched = true;
        } else {
          newState.matched = false;
        }
      }

      return newState;
    }

    case actions.FLIP_BACK: {
      const newState = Object.assign({}, state);

      newState.cardsFlipped.locations.forEach(location => {
        return newState.complexity.matrix.board[location.y][location.x].flipped = false;
      });

      newState.cardsFlipped.locations = [];
      newState.cardsFlipped.keys = [];
      newState.cardsFlipped.values = [];
      delete newState.matched;

      return newState;
    }

    case actions.REVEAL_ALL: {
      const newState = Object.assign({}, state);

      return newState.complexity.matrix.board.map(card => {
        return card.flipped = true;
      });
    }

    case actions.HIDE_ALL: {
      const newState = Object.assign({}, state);

      newState.complexity.matrix.board.map(row => {
        return row.map(col => {
          col.flipped = false;
          return col;
        });
      });

      return newState;
    }

    case actions.RESET_BOARD: {
      const newState = Object.assign({}, state);
      const board = utilActions.getShuffled(action.difficulty, newState.complexity.matrix.x);

      newState.cardsFlipped = InitialState.game.cardsFlipped;
      newState.cardsFlipped.resolved = [];
      newState.complexity.matrix.board = board;

      return newState;
    }

    case actions.UPDATE_SCORE: {
      const newState = Object.assign({}, state);

      delete newState.matched;

      return newState;
    }

    default:
      return state;
  }
}