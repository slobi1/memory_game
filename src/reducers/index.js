import { combineReducers } from 'redux';
import GameSettingsReducer from './GameSettingsReducer';
import GameScoreReducer from './GameScoreReducer';

import ComplexityReducer from './ComplexityReducer';

const rootReducer = combineReducers({
  GameSettingsReducer,
  GameScoreReducer,
  ComplexityReducer
});

export default rootReducer;
