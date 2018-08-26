import { combineReducers } from 'redux';
import FlipCardReducer from './FlipCardReducer';
import GameSettingsReducer from './GameSettingsReducer';
import GameScoreReducer from './GameScoreReducer';

const rootReducer = combineReducers({
  FlipCardReducer,
  GameSettingsReducer,
  GameScoreReducer
});

export default rootReducer;
