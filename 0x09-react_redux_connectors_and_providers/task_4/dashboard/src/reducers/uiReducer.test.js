import uiReducer, { initialUiState } from './uiReducer';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/uiActionTypes';

describe('uiReducer function', () => {
  it('returns state equal to initial state when no action is passed', () => {
    expect(uiReducer(undefined, {})).toEqual(initialUiState);
  });

  it('returns state equal to initial state when the action SELECT_COURSE is passed', () => {
    const action = { type: 'SELECT_COURSE' };
    expect(uiReducer(initialUiState, action)).toEqual(initialUiState);
  });

  it('correctly updates the isNotificationDrawerVisible property state when action DISPLAY_NOTIFICATION_DRAWER is passed', () => {
    const action = { type: DISPLAY_NOTIFICATION_DRAWER };

    const expectedState = initialUiState.set(
      'isNotificationDrawerVisible',
      true
    );

    expect(uiReducer(initialUiState, action)).toEqual(expectedState);
  });

  it('correctly updates the isNotificationDrawerVisible property state when action HIDE_NOTIFICATION_DRAWER is passed', () => {
    const action = { type: HIDE_NOTIFICATION_DRAWER };

    const expectedState = initialUiState.set(
      'isNotificationDrawerVisible',
      false
    );

    expect(uiReducer(initialUiState, action)).toEqual(expectedState);
  });

  it('correctly updates the isUserLoggedIn property state when action LOGIN_SUCCESS is passed', () => {
    const action = { type: LOGIN_SUCCESS };

    const expectedState = initialUiState.set('isUserLoggedIn', true);

    expect(uiReducer(initialUiState, action)).toEqual(expectedState);
  });

  it('correctly updates the isUserLoggedIn property state when action LOGIN_FAILURE is passed', () => {
    const action = { type: LOGIN_FAILURE };

    const expectedState = initialUiState.set('isUserLoggedIn', false);

    expect(uiReducer(initialUiState, action)).toEqual(expectedState);
  });

  it('correctly updates the isUserLoggedIn property state when action LOGOUT is passed', () => {
    const action = { type: LOGOUT };

    const expectedState = initialUiState.set('isUserLoggedIn', false);

    expect(uiReducer(initialUiState, action)).toEqual(expectedState);
  });
});