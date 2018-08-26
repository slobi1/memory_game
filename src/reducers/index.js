import { combineReducers } from 'redux';
import FlipCardReducer from './FlipCardReducer';
import GameSettingsReducer from './GameSettingsReducer';

const rootReducer = combineReducers({
  FlipCardReducer,
  GameSettingsReducer
});

export default rootReducer;
