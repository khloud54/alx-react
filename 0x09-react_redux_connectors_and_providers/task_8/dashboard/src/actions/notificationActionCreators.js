import 'node-fetch';
import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  SET_LOADING_STATE,
  FETCH_NOTIFICATIONS_SUCCESS,
} from './notificationActionTypes';

export const markAsAread = (index) => {
  return {
    type: MARK_AS_READ,
    index,
  };
};

export const boundMarkAsAread = (index) => (dispatch) => {
  dispatch(markAsAread(index));
};

export const setNotificationFilter = (filter) => {
  return {
    type: SET_TYPE_FILTER,
    filter,
  };
};

export const boundSetNotificationFilter = (filter) => (dispatch) => {
  dispatch(setNotificationFilter(filter));
};

export const setLoadingState = (isLoading) => {
  return {
    type: SET_LOADING_STATE,
    isLoading,
  };
};

export const setNotifications = (notifications) => {
  return {
    type: FETCH_NOTIFICATIONS_SUCCESS,
    notifications,
  };
};

export const fetchNotifications = () => {
  return (dispatch) => {
    dispatch(setLoadingState(true));
    fetch('/notifications.json')
      .then((res) => res.json())
      .then((json) => dispatch(setNotifications(json)))
      .then(() => dispatch(setLoadingState(false)))
      .catch((error) => dispatch(setLoadingState(false)))
      .finally(() => dispatch(setLoadingState(false)));
  };
};
