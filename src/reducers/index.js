import { combineReducers } from 'redux';
import GameSettingsReducer from './GameSettingsReducer';
import GameScoreReducer from './GameScoreReducer';
import ComplexityReducer from './ComplexityReducer';
import EnableGameReducer from './EnableGameReducer';
import BoardReducer from './BoardReducer';
import ScoresReducer from './FetchReducer';


const rootReducer = combineReducers({
  GameSettingsReducer,
  GameScoreReducer,
  ComplexityReducer,
  EnableGameReducer,
  BoardReducer,
  ScoresReducer
});

export default rootReducer;
