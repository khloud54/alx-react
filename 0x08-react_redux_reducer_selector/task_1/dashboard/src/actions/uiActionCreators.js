import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes';

export const login = (email, password) => {
  return {
    type: LOGIN,
    user: { email, password },
  };
};

export const logout = () => {
  return { type: LOGOUT };
};

export const displayNotificationDrawer = () => {
  return { type: DISPLAY_NOTIFICATION_DRAWER };
};

export const hideNotificationDrawer = () => {
  return { type: HIDE_NOTIFICATION_DRAWER };
};

// Bound actions

export const boundLogin = (email, password) => (dispatch) => {
  dispatch(login(email, password));
};

export const boundLogout = () => (dispatch) => {
  dispatch(logout());
};

export const boundDisplayNotificationDrawer = () => (dispatch) => {
  dispatch(displayNotificationDrawer());
};

export const boundHideNotificationDrawer = () => (dispatch) => {
  dispatch(hideNotificationDrawer());
};

export const loginSuccess = () => {
  return { type: LOGIN_SUCCESS };
};

// End bound actions

export const loginFailure = () => {
  return { type: LOGIN_FAILURE };
};

export const loginRequest = (email, password) => {
  return (dispatch) => {
    dispatch(login(email, password));

    fetch('/login-success.json')
      .then((res) => res.json())
      .then((json) => dispatch(loginSuccess()))
      .catch((error) => dispatch(loginFailure()));
  };

