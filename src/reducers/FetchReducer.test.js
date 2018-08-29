import FetchReducer from './FetchReducer';
import expect from 'expect';

describe('fetch reducer', () => {
  it('should return the initial state', () => {
    expect(FetchReducer(undefined, {})).toEqual({});
  });
});