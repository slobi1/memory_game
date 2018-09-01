import InitialState from "./InitialState";
import * as actions from "../constants/actionTypes";

export default function ComplexityReducer(state = InitialState.complexity, action) {
  switch (action.type) {
    case actions.GET_PAIRS: return Object.assign({}, state, state.pairs = parseInt(action.pairs, 10));

    case actions.GET_MATRIX: {
      return Object.assign(
                          {}, 
                          state, 
                          state.matrix.x = Math.ceil(Math.sqrt(action.pairs*2)), 
                          state.matrix.y = Math.floor(Math.sqrt(action.pairs*2))
                        );
    }

    default: return state;
  }
}