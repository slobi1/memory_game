import { combineReducers } from 'redux';
import GameSettingsReducer from './GameSettingsReducer';
import GameScoreReducer from './GameScoreReducer';
import ComplexityReducer from './ComplexityReducer';
import HighScoreReducer from './HighScoreReducer';
import EnableGameReducer from './EnableGameReducer';
import BoardReducer from './BoardReducer';


const rootReducer = combineReducers({
  GameSettingsReducer,
  GameScoreReducer,
  ComplexityReducer,
  HighScoreReducer,
  EnableGameReducer,
  BoardReducer
});

export default rootReducer;
