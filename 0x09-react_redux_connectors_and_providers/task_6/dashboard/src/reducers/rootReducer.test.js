import rootReducer from './rootReducer';
import { combineReducers } from 'redux';
import { Map } from 'immutable';

describe('rootReducer function', () => {
  it('returns the initial state', () => {
    const initialState = {
      courses: Map({}),
      notifications: Map({}),
      ui: Map({}),
    };

    const reducer = combineReducers(rootReducer);
    const state = reducer(undefined, { type: 'RANDOM' });

    for (const key in initialState) {
      expect(state[key]).toBeTruthy();
      expect(typeof initialState[key]).toEqual(typeof state[key]);
    }
  });
});
