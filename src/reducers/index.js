import { combineReducers } from 'redux';
import GameSettingsReducer from './GameSettingsReducer';
import GameScoreReducer from './GameScoreReducer';
import ComplexityReducer from './ComplexityReducer';
import EnableGameReducer from './EnableGameReducer';
import BoardReducer from './BoardReducer';
import FetchReducer from './FetchReducer';
import ScoresReducer from './ScoresReducer';

const rootReducer = combineReducers({
  GameSettingsReducer,
  GameScoreReducer,
  ComplexityReducer,
  EnableGameReducer,
  BoardReducer,
  FetchReducer,
  ScoresReducer
});

export default rootReducer;
