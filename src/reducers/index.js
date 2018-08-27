import { combineReducers } from 'redux';
import GameSettingsReducer from './GameSettingsReducer';
import GameScoreReducer from './GameScoreReducer';

const rootReducer = combineReducers({
  GameSettingsReducer,
  GameScoreReducer
});

export default rootReducer;
