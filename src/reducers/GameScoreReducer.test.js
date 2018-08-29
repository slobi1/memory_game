import GameScoreReducer from './GameScoreReducer';
import * as actions from "../constants/actionTypes";
import InitialState from "./InitialState";
import expect from 'expect';

describe('fetch reducer', () => {
  it('should return the initial state', () => {
    expect(GameScoreReducer(undefined, InitialState.score)).toEqual(0);
  });

  it('should update score by increment', () => {
    const updateScoreAction = {
      type: actions.UPDATE_SCORE,
      points: 10
    };

    expect(GameScoreReducer(undefined, updateScoreAction)).toEqual(10);
  });

  it('should reset score to 0', () => {
    const resetScoreAction = {
      type: actions.RESET_SCORE
    };

    expect(GameScoreReducer(undefined, resetScoreAction )).toEqual(0);
  });
});