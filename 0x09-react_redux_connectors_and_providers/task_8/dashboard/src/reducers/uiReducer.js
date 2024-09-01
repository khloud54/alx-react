import { Map } from 'immutable';
import {
  LOGIN,
  LOGOUT,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  HIDE_NOTIFICATION_DRAWER,
  DISPLAY_NOTIFICATION_DRAWER,
} from '../actions/uiActionTypes';

export const initialUiState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: Map({}),
});

const uiReducer = (state = initialUiState, action) => {
  switch (action.type) {
    case DISPLAY_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', true);

    case HIDE_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', false);

    case LOGIN:
      return state.set('user', action.user);

    case LOGIN_SUCCESS:
      return state.set('isUserLoggedIn', true);

    case LOGIN_FAILURE:
      return state.set('isUserLoggedIn', false);

    case LOGOUT:
      return state.set('isUserLoggedIn', false).set('user', null);

    default:
      break;
  }
  return state;
};

export default uiReducer;
