import { combineReducers } from 'redux';
import GameSettingsReducer from './GameSettingsReducer';
import GameScoreReducer from './GameScoreReducer';
import ComplexityReducer from './ComplexityReducer';
import HighScoreReducer from './HighScoreReducer';
import EnableGameReducer from './EnableGameReducer';


const rootReducer = combineReducers({
  GameSettingsReducer,
  GameScoreReducer,
  ComplexityReducer,
  HighScoreReducer,
  EnableGameReducer
});

export default rootReducer;
