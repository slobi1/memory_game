import InitialState from "./InitialState";
import * as actions from "../constants/actionTypes";

export default function ComplexityReducer(state = InitialState.complexity, action) {
  switch (action.type) {
    case actions.GET_PAIRS: {
      const newState = Object.assign({}, state);
      newState.pairs = parseInt(action.pairs, 10);
      return newState;
    }

    case actions.GET_MATRIX: {
      const newState = Object.assign({}, state);
      newState.matrix.x = Math.ceil(Math.sqrt(action.pairs*2));
      newState.matrix.y = Math.floor(Math.sqrt(action.pairs*2));
      return newState;
    }

    default:
      return state;
  }
}