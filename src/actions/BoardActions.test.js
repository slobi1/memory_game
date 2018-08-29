import * as types from "../constants/actionTypes";
import * as boardActions from './BoardActions';
import expect from 'expect';

describe('resetBoard action', () => {
  it('should create an action to add reset board', () => {
    const difficulty = 8;
    const x = 4;
    const expectedAction = {
      type: types.RESET_BOARD,
      difficulty,
      x
    };

    expect(boardActions.resetBoard(difficulty, x)).toEqual(expectedAction)
  })
});

describe('setCardToResolved action', () => {
  it('should create an action to set card at locations to resloved', () => {
    const locations = [{x: 1, y:1}, {x: 2, y:2}];
    const expectedAction = {
      type: types.SET_CARD_TO_RESOLVED,
      locations
    };

    expect(boardActions.setCardToResolved(locations)).toEqual(expectedAction)
  })
});

