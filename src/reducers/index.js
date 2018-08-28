import { combineReducers } from 'redux';
import GameSettingsReducer from './GameSettingsReducer';
import GameScoreReducer from './GameScoreReducer';

import ComplexityReducer from './ComplexityReducer';

import HighScoreReducer from './HighScoreReducer';

const rootReducer = combineReducers({
  GameSettingsReducer,
  GameScoreReducer,
  ComplexityReducer,
  HighScoreReducer
});

export default rootReducer;
